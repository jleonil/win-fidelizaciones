import sqlite3
import os
from werkzeug.security import generate_password_hash

ROOT_DIR = r'c:\Users\jhonn\OneDrive - WI-NET TELECOM\6. SERVIDOR OD'
DB_PATH = os.path.join(ROOT_DIR, 'database', 'app.sqlite3')

# Conectar a la DB y recrear tabla usuarios
conn = sqlite3.connect(DB_PATH)
c = conn.cursor()
c.execute('DROP TABLE IF EXISTS usuarios')
c.execute('''
    CREATE TABLE usuarios (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre TEXT NOT NULL,
        correo TEXT UNIQUE NOT NULL,
        password_hash TEXT NOT NULL,
        rol TEXT NOT NULL,
        estado TEXT NOT NULL,
        primer_ingreso INTEGER DEFAULT 1
    )
''')

# Insertar usuarios
usuarios = [
    # Asesores
    ('ALCANTARA TABOADA MERCEDES', 'malcantara@win.pe', '71261006', 'Asesor'),
    ('ALDAVE MEDINA JOAN HAROLD', 'jaldave@win.pe', '72251652', 'Asesor'),
    ('ATAHUAMAN ARIAS CRIST LISBETH', 'catahuaman@win.pe', '47885793', 'Asesor'),
    ('BACA DEL BUENO JULIO ANDERSON', 'jbaca@win.pe', '73241010', 'Asesor'),
    ('CORDOVA BALLENA DORKAS MERCEDES', 'dcordovab@win.pe', '47320165', 'Asesor'),
    ('CORREA LOYOLA EMANUEL TEODORO', 'ecorrea@win.pe', '77031711', 'Asesor'),
    ('GONZALES VILLACORTA CINDY GELEN', 'cgonzalesv@win.pe', '45715350', 'Asesor'),
    ('JIBAJA SALAS ANDRE MALEK', 'ajibaja@win.pe', '45772608', 'Asesor'),
    ('LOLI DE LA JARA JOANA MILAGROS', 'jloli@win.pe', '46349306', 'Asesor'),
    ('MANRIQUE PAIVA GLORIA PAMELA', 'gmanrique@win.pe', '70133227', 'Asesor'),
    ('MOGOLLON AMAYA IRMA ESTEFANY', 'imogollon@win.pe', '46879835', 'Asesor'),
    ('RAMIREZ SORIA ORLANDO', 'oramirezs@win.pe', '40097358', 'Asesor'),
    ('SILVA URCIA BILLY WILSON', 'bsilva@win.pe', '41919167', 'Asesor'),
    # Formador
    ('PEDRO HERRERA LANDAURI', 'pherrera@win.pe', '44929588', 'Formador'),
    # Administrador
    ('JHONNY LEÓN ILLESCAS', 'jleoni@win.pe', 'Admin@2026Win', 'Administrador')
]

for u in usuarios:
    pw_hash = generate_password_hash(u[2])
    c.execute('INSERT INTO usuarios (nombre, correo, password_hash, rol, estado, primer_ingreso) VALUES (?, ?, ?, ?, ?, ?)',
              (u[0], u[1], pw_hash, u[3], 'Activo', 1))

conn.commit()
conn.close()
print("Tabla de usuarios recreada exitosamente.")
