import os



files_to_process = [


"/home/southatoms/Escritorio/develop/personal/grappling-gear/src"

]

direx = [    
"/home/southatoms/Escritorio/develop/personal/grappling-gear/src/scss/components/_cart.scss",
"/home/southatoms/Escritorio/develop/personal/grappling-gear/src/scss/components/_cart.scss",
"/home/southatoms/Escritorio/develop/personal/grappling-gear/src/scss/_variables.scss"
]

file_extensions = ['tsx','ts' ]
output_file = '_connections.txt'

def is_code_file(file_path):
    # Se añade el punto para mayor precisión (ejemplo: ".js")
    return any(file_path.endswith(f".{ext}") for ext in file_extensions)

def process_file(file_path, outfile):
    try:
        with open(file_path, 'r', encoding='utf-8') as infile:
            content = infile.read()
        outfile.write(f'{file_path}\n\n')
        outfile.write(f'Contenido:\n{content}\n\n{"-"*80}\n\n')
    except Exception as e:
        print(f'Error al leer {file_path}: {e}')

with open(output_file, 'w', encoding='utf-8') as outfile:
    for path in files_to_process:
        if os.path.isfile(path):
            # Si es archivo, se procesa directamente
            if is_code_file(path):
                process_file(path, outfile)
            else:
                print(f'El archivo {path} no tiene una extensión válida.')
        elif os.path.isdir(path):
            # Si es directorio, se recorre recursivamente
            for root, dirs, files in os.walk(path):
                for file in files:
                    full_path = os.path.join(root, file)
                    if is_code_file(full_path):
                        process_file(full_path, outfile)
        else:
            print(f'La ruta {path} no es un archivo ni un directorio válido.')

print(f'Todos los archivos de código se han copiado en {output_file}')
