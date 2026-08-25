import os
import glob

def fix_mojibake(text):
    try:
        # Intenta revertir la doble codificación
        return text.encode('latin1').decode('utf-8')
    except Exception:
        # Si falla (ya estaba bien o tiene caracteres raros), hacemos replace manual
        replacements = {
            'Ã¡': 'á', 'Ã©': 'é', 'Ã³': 'ó', 'Ãº': 'ú', 'Ã±': 'ñ', 'Ã‘': 'Ñ',
            'Ã\xad': 'í', 'Ã\x8d': 'Í', 'Ã\x81': 'Á', 'Ã\x89': 'É', 'Ã\x93': 'Ó', 'Ã\x9a': 'Ú',
            'Â¿': '¿', 'Â¡': '¡'
        }
        for bad, good in replacements.items():
            text = text.replace(bad, good)
        return text

def process_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        fixed_content = fix_mojibake(content)
        
        # Ensure meta charset exists in HTML
        if filepath.endswith('.html') and '<meta charset="UTF-8">' not in fixed_content:
            fixed_content = fixed_content.replace('<head>', '<head>\n    <meta charset="UTF-8">', 1)
            
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
        print(f"Fixed {filepath}")
    except Exception as e:
        print(f"Error {filepath}: {e}")

files = glob.glob('app/**/*.html', recursive=True) + glob.glob('app/**/*.py', recursive=True)
for f in files:
    process_file(f)
