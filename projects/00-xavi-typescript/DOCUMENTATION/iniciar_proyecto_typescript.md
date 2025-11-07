
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

4. Ya puedes abrir el archivo html e iniciarlo con `ctrl + 1`




## Mostrar el contenido ACTIVO de tsconfig.json

    tsc --showConfig


## La carpeta dist/ NO se commitea, pero SI se genera-