// src/navBar.ts

/**
 * Custom Element: <nav-bar></nav-bar>
 * Implementa el menú de navegación reutilizable.
 */
class navBar extends HTMLElement {
    // 1. Opcional: Se ejecuta cuando el elemento se inserta en el DOM.
    connectedCallback() {
        // 2. Crea un Shadow DOM para encapsular el estilo y el marcado.
        //    Esto asegura que el CSS de la barra de navegación no afecte al resto de la página.
        const shadow = this.attachShadow({ mode: 'open' });
        
        // 3. Define el marcado (HTML) del componente.
        const htmlContent = `
            <style>
                /* Estilos encapsulados */
                nav {
                    background-color: #333;
                    padding: 10px 0;
                }
                ul {
                    list-style: none;
                    margin: 0;
                    padding: 0;
                    display: flex;
                    justify-content: flex-start;
                }
                li {
                    margin: 0 15px;
                }
                a {
                    color: white;
                    text-decoration: none;
                    font-family: sans-serif;
                }
            </style>
            <nav role="navigation" aria-label="Main Navigation">
                <ul>
                    <li><a href="./index.html">Index</a></li>
                    <li><a href="./tipos.html">Tipos</a></li>
                    
                </ul>
            </nav>
        `;

        shadow.innerHTML = htmlContent;
    }
}

// 4. Registra el nuevo Custom Element en el navegador.
//    El nombre DEBE contener un guion (-) para ser válido.
if (!customElements.get('my-nav-bar')) {
    customElements.define('nav-bar', navBar);
}

// Para usar con módulos (import/export)
export default navBar;