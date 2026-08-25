import sqlite3
import os
import sys
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
import datetime
import json

EXEC_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ROOT_DIR = EXEC_DIR
DB_PATH = os.path.join(ROOT_DIR, 'database', 'app.sqlite3')

def log_startup(msg):
    try:
        log_path = os.path.join(ROOT_DIR, 'logs', 'startup.log')
        with open(log_path, 'a', encoding='utf-8') as f:
            f.write(f"{datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')} - {msg}\n")
    except:
        pass

def _log_startup_error(msg):
    log_startup(f"ERROR: {msg}")

# Asegurar existencia de carpetas requeridas
for folder in ['database', 'auditoria', 'logs', 'plantillas', 'tickets', 'public', 'config']:
    try:
        os.makedirs(os.path.join(ROOT_DIR, folder), exist_ok=True)
    except Exception as e:
        _log_startup_error(f"No se pudo crear carpeta {folder}: {str(e)}")

class User(UserMixin):
    def __init__(self, id, nombre, correo, password_hash, rol, estado, primer_ingreso):
        self.id = id
        self.nombre = nombre
        self.correo = correo
        self.password_hash = password_hash
        self.rol = rol
        self.estado = estado
        self.primer_ingreso = primer_ingreso

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)
        
    @property
    def is_active(self):
        return self.estado == 'Activo'

import psycopg2
import psycopg2.extras
from urllib.parse import urlparse

DATABASE_URL = os.environ.get('DATABASE_URL')

class DBConnection:
    def __init__(self):
        self.is_postgres = DATABASE_URL and DATABASE_URL.startswith('postgres')
        if self.is_postgres:
            self.conn = psycopg2.connect(DATABASE_URL, cursor_factory=psycopg2.extras.DictCursor)
        else:
            self.conn = sqlite3.connect(DB_PATH)
            self.conn.row_factory = sqlite3.Row

    def execute(self, query, params=()):
        cursor = self.conn.cursor()
        if self.is_postgres:
            query = query.replace('?', '%s')
        cursor.execute(query, params)
        return cursor

    def commit(self):
        self.conn.commit()

    def close(self):
        self.conn.close()

def get_db_connection():
    try:
        return DBConnection()
    except Exception as e:
        _log_startup_error(f"Error conectando a DB: {str(e)}")
        raise

def init_db():
    try:
        conn = get_db_connection()
        
        if conn.is_postgres:
            conn.execute('''
                CREATE TABLE IF NOT EXISTS usuarios (
                    id SERIAL PRIMARY KEY,
                    nombre TEXT NOT NULL,
                    correo TEXT UNIQUE NOT NULL,
                    password_hash TEXT NOT NULL,
                    rol TEXT NOT NULL,
                    estado TEXT NOT NULL,
                    primer_ingreso INTEGER DEFAULT 1
                )
            ''')
            conn.execute('''
                CREATE TABLE IF NOT EXISTS auditoria (
                    id SERIAL PRIMARY KEY,
                    usuario_correo TEXT NOT NULL,
                    accion TEXT NOT NULL,
                    modulo TEXT NOT NULL,
                    fecha TEXT NOT NULL,
                    hora TEXT NOT NULL,
                    ip TEXT,
                    detalles TEXT
                )
            ''')
        else:
            conn.execute('''
                CREATE TABLE IF NOT EXISTS usuarios (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    nombre TEXT NOT NULL,
                    correo TEXT UNIQUE NOT NULL,
                    password_hash TEXT NOT NULL,
                    rol TEXT NOT NULL,
                    estado TEXT NOT NULL,
                    primer_ingreso INTEGER DEFAULT 1
                )
            ''')
            conn.execute('''
                CREATE TABLE IF NOT EXISTS auditoria (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    usuario_correo TEXT NOT NULL,
                    accion TEXT NOT NULL,
                    modulo TEXT NOT NULL,
                    fecha TEXT NOT NULL,
                    hora TEXT NOT NULL,
                    ip TEXT,
                    detalles TEXT
                )
            ''')
        
        log_startup(f"RUTA BASE DE DATOS: {DB_PATH if not conn.is_postgres else 'PostgreSQL'}")

        # Modo Primer Inicio: Crear usuarios base si está vacía
        cursor = conn.execute('SELECT COUNT(*) FROM usuarios')
        count = cursor.fetchone()[0]
        log_startup(f"Usuarios encontrados: {count}")
        
        if count == 0:
            usuarios_iniciales = [
                ('Asesor General', 'asesor@win.pe', 'asesor123', 'Asesor', 'Activo'),
                ('Formador General', 'formador@win.pe', 'formador123', 'Formador', 'Activo'),
                ('Administrador General', 'admin@win.pe', 'admin123', 'Administrador', 'Activo')
            ]
            for u in usuarios_iniciales:
                pw_hash = generate_password_hash(u[2])
                conn.execute('INSERT INTO usuarios (nombre, correo, password_hash, rol, estado) VALUES (?, ?, ?, ?, ?)',
                          (u[0], u[1], pw_hash, u[3], u[4]))
        
        # Ejecutar Seed automático (Requerimiento)
        seed_users(conn)

        
        conn.commit()
        conn.close()
    except Exception as e:
        _log_startup_error(f"Error en init_db: {str(e)}\nRuta de ejecución: {EXEC_DIR}\nRuta DB: {DB_PATH}")
        raise

def seed_users(conn):
    # Lista de usuarios obligatorios
    usuarios_obligatorios = [
        'malcantara@win.pe', 'jaldave@win.pe', 'catahuaman@win.pe', 
        'jbaca@win.pe', 'dcordovab@win.pe', 'ecorrea@win.pe', 
        'cgonzalesv@win.pe', 'ajibaja@win.pe', 'jloli@win.pe', 
        'gmanrique@win.pe', 'imogollon@win.pe', 'oramirezs@win.pe', 
        'bsilva@win.pe', 'pherrera@win.pe', 'jleoni@win.pe'
    ]
    
    # Precomputar el hash de la contraseña por defecto para el seed ("Win2026@")
    default_pw_hash = generate_password_hash('Win2026@')
    
    agregados = 0
    for correo in usuarios_obligatorios:
        cursor = conn.execute('SELECT 1 FROM usuarios WHERE correo = ?', (correo,))
        if not cursor.fetchone():
            nombre = correo.split('@')[0].capitalize()
            conn.execute('INSERT INTO usuarios (nombre, correo, password_hash, rol, estado, primer_ingreso) VALUES (?, ?, ?, ?, ?, ?)',
                      (nombre, correo, default_pw_hash, 'Asesor', 'Activo', 1))
            agregados += 1
            
    if agregados > 0:
        log_startup(f"Seed ejecutado: {agregados} usuarios obligatorios añadidos.")

def get_user_by_id(user_id):
    conn = get_db_connection()
    row = conn.execute('SELECT * FROM usuarios WHERE id = ?', (user_id,)).fetchone()
    conn.close()
    if row:
        return User(row['id'], row['nombre'], row['correo'], row['password_hash'], row['rol'], row['estado'], row['primer_ingreso'])
    return None

def get_user_by_email(correo):
    conn = get_db_connection()
    row = conn.execute('SELECT * FROM usuarios WHERE correo = ?', (correo,)).fetchone()
    conn.close()
    if row:
        return User(row['id'], row['nombre'], row['correo'], row['password_hash'], row['rol'], row['estado'], row['primer_ingreso'])
    return None

def registrar_auditoria(usuario_correo, accion, modulo, ip, detalles=""):
    conn = get_db_connection()
    now = datetime.datetime.now()
    fecha = now.strftime('%Y-%m-%d')
    hora = now.strftime('%H:%M:%S')
    
    conn.execute('''
        INSERT INTO auditoria (usuario_correo, accion, modulo, fecha, hora, ip, detalles)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    ''', (usuario_correo, accion, modulo, fecha, hora, ip, detalles))
    conn.commit()
    conn.close()
    
    # Generar backup en JSON por día
    backup_path = os.path.join(ROOT_DIR, 'auditoria', f'auditoria_{fecha.replace("-", "_")}.json')
    log_entry = {
        "usuario": usuario_correo,
        "accion": accion,
        "modulo": modulo,
        "fecha": fecha,
        "hora": hora,
        "ip": ip,
        "detalles": detalles
    }
    
    logs = []
    if os.path.exists(backup_path):
        try:
            with open(backup_path, 'r', encoding='utf-8') as f:
                logs = json.load(f)
        except:
            pass
    logs.append(log_entry)
    with open(backup_path, 'w', encoding='utf-8') as f:
        json.dump(logs, f, indent=4, ensure_ascii=False)
