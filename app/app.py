from flask import Flask, render_template, request, redirect, url_for, flash, jsonify, make_response
from flask_login import LoginManager, login_user, logout_user, login_required, current_user
from werkzeug.security import generate_password_hash
import os
import datetime
from models import init_db, get_user_by_id, get_user_by_email, registrar_auditoria, get_db_connection
import pandas as pd
import io
from flask import send_file

app = Flask(__name__)
app.secret_key = 'super_secret_key_win_asesores'

login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'login'

@login_manager.user_loader
def load_user(user_id):
    return get_user_by_id(int(user_id))

@app.route('/')
def log_login_attempt(correo, found, password_valid, estado, reason):
    try:
        log_path = os.path.join(ROOT_DIR, 'logs', 'login.log')
        with open(log_path, 'a', encoding='utf-8') as f:
            f.write(f"[{datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')}]\n")
            f.write(f"Correo ingresado: {correo}\n")
            f.write(f"Usuario encontrado: {'SI' if found else 'NO'}\n")
            f.write(f"Contraseña válida: {'SI' if password_valid else 'NO'}\n")
            f.write(f"Estado: {estado}\n")
            f.write(f"Motivo rechazo: {reason}\n")
            f.write("-" * 40 + "\n")
    except:
        pass

def index():
    if current_user.is_authenticated:
        return redirect(url_for('app_main'))
    return redirect(url_for('login'))

@app.route('/login', methods=['GET', 'POST'])
def login():
    if current_user.is_authenticated:
        return redirect(url_for('app_main'))
        
    if request.method == 'POST':
        correo = request.form.get('correo')
        password = request.form.get('password')
        
        user = get_user_by_email(correo)
        found = user is not None
        password_valid = user.check_password(password) if found else False
        estado = user.estado.upper() if found else 'N/A'
        
        if found and password_valid:
            if not user.is_active:
                log_login_attempt(correo, found, password_valid, estado, 'CUENTA INACTIVA')
                flash('Tu cuenta está inactiva. Contacta al administrador.', 'error')
                return redirect(url_for('login'))
                
            log_login_attempt(correo, found, password_valid, estado, 'N/A (ÉXITO)')
            login_user(user)
            registrar_auditoria(user.correo, "Inicio de sesión", "Sistema", request.remote_addr)
            
            # Check if primer_ingreso
            if getattr(user, 'primer_ingreso', 0) == 1:
                resp = redirect(url_for('primer_ingreso'))
            else:
                resp = redirect(url_for('app_main'))
                
            if request.form.get('remember_me'):
                resp.set_cookie('remember_email', correo, max_age=30*24*60*60)
            else:
                resp.set_cookie('remember_email', '', expires=0)
            return resp
        else:
            reason = 'NO EXISTE' if not found else 'CONTRASEÑA INVÁLIDA'
            log_login_attempt(correo, found, password_valid, estado, reason)
            flash('Correo o contraseña incorrectos', 'error')
            
    remember_email = request.cookies.get('remember_email', '')
    return render_template('login.html', remember_email=remember_email)

@app.route('/primer_ingreso', methods=['GET', 'POST'])
@login_required
def primer_ingreso():
    if current_user.primer_ingreso == 0:
        return redirect(url_for('app_main'))
        
    if request.method == 'POST':
        nueva_clave = request.form.get('nueva_clave')
        confirmar_clave = request.form.get('confirmar_clave')
        
        if nueva_clave != confirmar_clave:
            flash('Las contraseñas no coinciden.', 'error')
        elif len(nueva_clave) < 6:
            flash('La contraseña debe tener al menos 6 caracteres.', 'error')
        else:
            conn = get_db_connection()
            pw_hash = generate_password_hash(nueva_clave)
            conn.execute('UPDATE usuarios SET password_hash = ?, primer_ingreso = 0 WHERE id = ?', (pw_hash, current_user.id))
            conn.commit()
            conn.close()
            registrar_auditoria(current_user.correo, "Cambio de contraseña (Primer Ingreso)", "Seguridad", request.remote_addr)
            flash('Contraseña actualizada correctamente.', 'success')
            # Cargar el usuario actualizado en la sesión para que se refresque (opcional, pero reload es automático si se vuelve a loguear, aunque el current_user persistirá con 1 temporalmente. Mejor desloguear y volver a loguear o simplemente redirigir).
            return redirect(url_for('app_main'))
            
    return render_template('primer_ingreso.html')

@app.route('/logout')
@login_required
def logout():
    registrar_auditoria(current_user.correo, "Cierre de sesión", "Sistema", request.remote_addr)
    logout_user()
    return redirect(url_for('login'))

@app.route('/app')
@login_required
def app_main():
    if getattr(current_user, 'primer_ingreso', 0) == 1:
        return redirect(url_for('primer_ingreso'))
    return render_template('app.html', user=current_user)

@app.route('/api/audit', methods=['POST'])
@login_required
def api_audit():
    data = request.json
    accion = data.get('accion')
    modulo = data.get('modulo')
    detalles = data.get('detalles', '')
    if accion and modulo:
        registrar_auditoria(current_user.correo, accion, modulo, request.remote_addr, detalles)
        return jsonify({"status": "success"}), 200
    return jsonify({"status": "error", "message": "Faltan datos"}), 400

@app.route('/dashboard')
@login_required
def dashboard():
    if current_user.rol not in ['Administrador', 'Coordinador', 'Supervisor', 'Formador', 'Calidad']:
        flash('No tienes permisos para ver el dashboard', 'error')
        return redirect(url_for('app_main'))
        
    conn = get_db_connection()
    logs = conn.execute('SELECT * FROM auditoria ORDER BY id DESC LIMIT 500').fetchall()
    usuarios = conn.execute('SELECT id, nombre, correo, rol, estado FROM usuarios').fetchall()
    
    # KPI Calculation update for Eliminado
    today = datetime.datetime.now().strftime('%Y-%m-%d')
    activos = conn.execute('SELECT COUNT(DISTINCT usuario_correo) FROM auditoria WHERE fecha = ?', (today,)).fetchone()[0]
    
    consultas = conn.execute('SELECT COUNT(*) FROM auditoria WHERE accion LIKE "%Búsqueda%"').fetchone()[0]
    plantillas = conn.execute('SELECT COUNT(*) FROM auditoria WHERE accion LIKE "%Copió Plantilla%"').fetchone()[0]
    tickets = conn.execute('SELECT COUNT(*) FROM auditoria WHERE modulo = "Tickets" AND accion NOT LIKE "%Búsqueda%"').fetchone()[0]
    derivaciones = conn.execute('SELECT COUNT(*) FROM auditoria WHERE modulo = "Derivaciones Discord"').fetchone()[0]
    
    # New Admin KPIs
    total_usuarios = conn.execute('SELECT COUNT(*) FROM usuarios WHERE estado != "Eliminado"').fetchone()[0]
    us_activos = conn.execute('SELECT COUNT(*) FROM usuarios WHERE estado = "Activo"').fetchone()[0]
    us_inactivos = conn.execute('SELECT COUNT(*) FROM usuarios WHERE estado = "Inactivo"').fetchone()[0]
    asesores = conn.execute('SELECT COUNT(*) FROM usuarios WHERE rol = "Asesor" AND estado != "Eliminado"').fetchone()[0]
    formadores = conn.execute('SELECT COUNT(*) FROM usuarios WHERE rol = "Formador" AND estado != "Eliminado"').fetchone()[0]
    supervisores = conn.execute('SELECT COUNT(*) FROM usuarios WHERE rol = "Supervisor" AND estado != "Eliminado"').fetchone()[0]
    calidad = conn.execute('SELECT COUNT(*) FROM usuarios WHERE rol = "Calidad" AND estado != "Eliminado"').fetchone()[0]
    coordinadores = conn.execute('SELECT COUNT(*) FROM usuarios WHERE rol = "Coordinador" AND estado != "Eliminado"').fetchone()[0]
    administradores = conn.execute('SELECT COUNT(*) FROM usuarios WHERE rol = "Administrador" AND estado != "Eliminado"').fetchone()[0]
    pendientes_cambio = conn.execute('SELECT COUNT(*) FROM usuarios WHERE primer_ingreso = 1 AND estado != "Eliminado"').fetchone()[0]
    
    conn.close()
    
    kpis = {
        'usuarios_activos': activos,
        'consultas': consultas,
        'plantillas': plantillas,
        'tickets': tickets,
        'derivaciones': derivaciones,
        'total_usuarios': total_usuarios,
        'us_activos': us_activos,
        'us_inactivos': us_inactivos,
        'asesores': asesores,
        'formadores': formadores,
        'supervisores': supervisores,
        'calidad': calidad,
        'coordinadores': coordinadores,
        'administradores': administradores,
        'pendientes_cambio': pendientes_cambio
    }
    
    return render_template('dashboard.html', logs=logs, usuarios=usuarios, user=current_user, kpis=kpis)

@app.route('/admin/usuarios/crear', methods=['POST'])
@login_required
def crear_usuario():
    if current_user.rol not in ['Administrador', 'Coordinador']:
        return "Acceso denegado", 403
    
    nombre = request.form.get('nombre')
    correo = request.form.get('correo')
    password = request.form.get('password')
    rol = request.form.get('rol')
    estado = request.form.get('estado')
    
    conn = get_db_connection()
    exist = conn.execute('SELECT id FROM usuarios WHERE correo = ?', (correo,)).fetchone()
    if exist:
        conn.close()
        flash('El correo ya está registrado.', 'error')
        return redirect(url_for('dashboard'))
        
    pw_hash = generate_password_hash(password)
    conn.execute('INSERT INTO usuarios (nombre, correo, password_hash, rol, estado, primer_ingreso) VALUES (?, ?, ?, ?, ?, 1)',
                 (nombre, correo, pw_hash, rol, estado))
    conn.commit()
    conn.close()
    
    registrar_auditoria(current_user.correo, f"Creó usuario {correo}", "Administración", request.remote_addr)
    flash('Usuario creado exitosamente.', 'success')
    return redirect(url_for('dashboard'))

@app.route('/admin/usuarios/editar/<int:id>', methods=['POST'])
@login_required
def editar_usuario(id):
    if current_user.rol not in ['Administrador', 'Coordinador']:
        return "Acceso denegado", 403
        
    nombre = request.form.get('nombre')
    correo = request.form.get('correo')
    rol = request.form.get('rol')
    estado = request.form.get('estado')
    
    conn = get_db_connection()
    target_user = conn.execute('SELECT correo, rol FROM usuarios WHERE id=?', (id,)).fetchone()
    
    if current_user.rol == 'Coordinador' and target_user['rol'] in ['Administrador', 'Coordinador']:
        conn.close()
        return "No tienes permiso para modificar a este usuario.", 403
        
    conn.execute('UPDATE usuarios SET nombre=?, correo=?, rol=?, estado=? WHERE id=?', (nombre, correo, rol, estado, id))
    conn.commit()
    conn.close()
    
    if target_user['rol'] != rol:
        registrar_auditoria(current_user.correo, "Cambio de Rol", "Administración", request.remote_addr, f"Rol anterior: {target_user['rol']}\nRol nuevo: {rol}\nUsuario afectado: {target_user['correo']}")
    else:
        registrar_auditoria(current_user.correo, f"Editó usuario ID {id}", "Administración", request.remote_addr)
    
    flash('Usuario actualizado.', 'success')
    return redirect(url_for('dashboard'))

@app.route('/admin/usuarios/reset/<int:id>', methods=['POST'])
@login_required
def reset_password(id):
    if current_user.rol not in ['Administrador', 'Coordinador']:
        return "Acceso denegado", 403
        
    conn = get_db_connection()
    target_user = conn.execute('SELECT correo, rol FROM usuarios WHERE id=?', (id,)).fetchone()
    if current_user.rol == 'Coordinador' and target_user['rol'] in ['Administrador', 'Coordinador']:
        conn.close()
        return "No tienes permiso para modificar a este usuario.", 403
        
    nueva_clave = request.form.get('nueva_clave')
    pw_hash = generate_password_hash(nueva_clave)
    
    conn.execute('UPDATE usuarios SET password_hash=?, primer_ingreso=1 WHERE id=?', (pw_hash, id))
    conn.commit()
    conn.close()
    
    registrar_auditoria(current_user.correo, f"Reset contrasena usuario {target_user['correo']}", "Administración", request.remote_addr)
    flash('Contraseña temporal asignada.', 'success')
    return redirect(url_for('dashboard'))

@app.route('/admin/usuarios/estado/<int:id>', methods=['POST'])
@login_required
def cambiar_estado(id):
    if current_user.rol not in ['Administrador', 'Coordinador']:
        return "Acceso denegado", 403
        
    nuevo_estado = request.form.get('estado') # 'Activo', 'Inactivo', 'Eliminado'
    
    conn = get_db_connection()
    target_user = conn.execute('SELECT correo, rol FROM usuarios WHERE id=?', (id,)).fetchone()
    if current_user.rol == 'Coordinador' and target_user['rol'] in ['Administrador', 'Coordinador']:
        conn.close()
        return "No tienes permiso para modificar a este usuario.", 403
        
    conn.execute('UPDATE usuarios SET estado=? WHERE id=?', (nuevo_estado, id))
    conn.commit()
    conn.close()
    
    registrar_auditoria(current_user.correo, f"Cambio estado a {nuevo_estado} de {target_user['correo']}", "Administración", request.remote_addr)
    flash(f'Estado cambiado a {nuevo_estado}.', 'success')
    return redirect(url_for('dashboard'))

@app.route('/dashboard/export/excel')
@login_required
def export_excel():
    if current_user.rol not in ['Administrador', 'Coordinador', 'Supervisor', 'Calidad']:
        return "Acceso denegado", 403
        
    conn = get_db_connection()
    df = pd.read_sql_query('SELECT * FROM auditoria ORDER BY id DESC', conn)
    conn.close()
    
    output = io.BytesIO()
    with pd.ExcelWriter(output, engine='openpyxl') as writer:
        df.to_excel(writer, index=False, sheet_name='Auditoria')
    output.seek(0)
    
    return send_file(output, download_name=f'auditoria_{datetime.datetime.now().strftime("%Y%m%d_%H%M%S")}.xlsx', as_attachment=True)

if __name__ == '__main__':
    from models import init_db
    import os
    
    # Inicializar DB en caso de ser necesario (en producción suele hacerse mediante scripts de migración)
    try:
        init_db()
        print("Base de datos y tablas inicializadas correctamente.")
    except Exception as e:
        print(f"Error crítico en init_db: {e}")
    
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=False)
