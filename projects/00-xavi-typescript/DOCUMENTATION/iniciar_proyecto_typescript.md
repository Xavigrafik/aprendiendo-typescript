### INSTALAR TYPESCRIPT
    npm install -g typescript

### Iniciar proyecto en TS
    extension live Server
    cd /mi proyecyo/

# Iniciar proyecto en TS
**tsc** es el compilador de typescript. TSC es la abreviatura de TypeScript Compiler


**Requisitos:**
* Node.js y npm instalados.


### Empecemos!

1. Ir a la carpeta del proyecto

    ```bash
    tsc --init
    ```  
Se creará un archivo tsconfig.json automáticamente.

2. Extension live Server (opcional).
3. Activar el modo watch en la terminal:

    ```bash
    tsc -w
    tsc --watch
    ```


////////////////////////////////////

<!-- SI NO TIENES PERMISOS DE ADMINISTRADOR Y/O TSC NO FUNCIONA -->
<!-- PUEDES USAR NPX -->

    tsc --showConfig


    npx tsc -w
    
<!-- NPX es una herramienta muy práctica que te permite ejecutar comandos de paquetes de Node.js de manera rápida y sencilla, sin la necesidad de una instalación global. -->


## La carpeta dist/ NO se commitea, pero SI se genera-