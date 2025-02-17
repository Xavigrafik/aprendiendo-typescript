### INSTALAR TYPESCRIPT
    npm install -g typescript

### Iniciar proyecto en TS
    extension live Server
    cd /mi proyecyo/

# (tsc es el compilador de typescript )
# tsc es la abreviatura de TypeScript Compiler
#### Crear un archivo tsconfig.json automáticamente:
    tsc --init

#### Activar el modo watch en la terminal:
    tsc -w
    tsc --watch
    
### Muestra el contenido ACTIVO de tsconfig.json
     tsc --showConfig 


////////////////////////////////////

<!-- SI NO TIENES PERMISOS DE ADMINISTRADOR Y/O TSC NO FUNCIONA -->
<!-- PUEDES USAR NPX -->

    npx tsc -w
    
<!-- NPX es una herramienta muy práctica que te permite ejecutar comandos de paquetes de Node.js de manera rápida y sencilla, sin la necesidad de una instalación global. -->
