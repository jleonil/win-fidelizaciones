import os
import shutil

base = r'c:\Users\jhonn\OneDrive - WI-NET TELECOM\6. SERVIDOR OD'
old_base = os.path.join(base, 'ProyectoAsesores')
dirs = ['app', 'database', 'auditoria', 'plantillas', 'tickets', 'logs', 'backups', 'public', 'launcher', 'config']

for d in dirs:
    path = os.path.join(base, d)
    if not os.path.exists(path):
        os.makedirs(path)

app_dir = os.path.join(base, 'app')
if os.path.exists(os.path.join(old_base, 'app.py')):
    shutil.move(os.path.join(old_base, 'app.py'), os.path.join(app_dir, 'app.py'))
if os.path.exists(os.path.join(old_base, 'models.py')):
    shutil.move(os.path.join(old_base, 'models.py'), os.path.join(app_dir, 'models.py'))

if os.path.exists(os.path.join(old_base, 'templates')):
    dest = os.path.join(app_dir, 'templates')
    if os.path.exists(dest):
        shutil.rmtree(dest)
    shutil.move(os.path.join(old_base, 'templates'), app_dir)

if os.path.exists(os.path.join(old_base, 'database', 'app.sqlite3')):
    shutil.move(os.path.join(old_base, 'database', 'app.sqlite3'), os.path.join(base, 'database', 'app.sqlite3'))

print("Archivos movidos con exito.")
