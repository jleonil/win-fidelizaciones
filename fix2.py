import os
import glob

def fix_uppercase(text):
    replacements = {
        'Ã“': 'Ó', 
        'Ã‰': 'É', 
        'Ã\x8d': 'Í', 
        'Ã\x81': 'Á', 
        'Ã\x93': 'Ó', 
        'Ã\x9a': 'Ú',
        'Ã‘': 'Ñ',
        'ATENCIÃ“N': 'ATENCIÓN',
        'TELÃ‰FONO': 'TELÉFONO',
        'MÃ“DULO': 'MÓDULO',
        'TECNOLÃ“GICO': 'TECNOLÓGICO',
        'TELEFÃ“NICO': 'TELEFÓNICO'
    }
    for bad, good in replacements.items():
        text = text.replace(bad, good)
    return text

def process_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        fixed_content = fix_uppercase(content)
            
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
        print(f"Fixed {filepath}")
    except Exception as e:
        print(f"Error {filepath}: {e}")

files = glob.glob('app/**/*.html', recursive=True) + glob.glob('app/**/*.py', recursive=True)
for f in files:
    process_file(f)
