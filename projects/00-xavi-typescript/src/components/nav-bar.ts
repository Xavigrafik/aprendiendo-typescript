// src/navBar.ts

/**
 * Custom Element: <nav-bar></nav-bar>
 * Implementa el menú de navegación reutilizable con gestión de enlace activo.
 */
class NavBar extends HTMLElement {
    
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        
        // 🚨 MEJORA: Asignación A11Y en el constructor
        this.setAttribute('role', 'navigation');
        this.setAttribute('aria-label', 'Main Navigation');

        // Renderiza el HTML/CSS inicial
        this.render();
    }

    /**
     * Ciclo de vida: Llamado cuando el elemento se inserta en el DOM. 
     * Ideal para lógica que depende del entorno (como window.location).
     */
    connectedCallback() {
        this.setActiveLink();
    }
    
    /**
     * Método centralizado para generar el marcado (Shadow DOM).
     */
    private render(): void {
        const htmlContent = `
            <style>
                /* ... (Tus estilos CSS) ... */
                nav {
                    background-color: #323334;
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
                    min-width: 70px;
                    text-align: center;
                }
                li.active a {
                    /* Mejora: Añadir transition para mejor UX */
                    border-bottom: 3px solid white;
                    opacity: 1;
                }
                a {
                    color: white;
                    text-decoration: none;
                    font-family: sans-serif;
                    opacity: 0.5;
                    width: 100%;
                    display: inline-block;
                    padding-bottom: 5px; /* Espacio para el borde inferior */
                    transition: opacity 0.3s;
                }
                :host {
                    display: block;
                }
                /* Fin de estilos */
            </style>
            
            <div class="row">
                <div class="col">
                    <nav> 
                        <ul>
                            <li><a href="./index.html">Index</a></li>
                            <li><a href="./tipos.html">Tipos</a></li>
                            </ul>
                    </nav>
                </div>
            </div>
        `;
        
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = htmlContent;
        }
    }
    
    /**
     * Lógica para determinar qué enlace debe estar activo.
     */
    private setActiveLink(): void {
        if (!this.shadowRoot) return;

        const currentPath = window.location.pathname.toLowerCase();
        
        // 1. Obtener todos los enlaces dentro del Shadow DOM
        const links = this.shadowRoot.querySelectorAll('a');

        links.forEach(link => {
            const linkHref = link.getAttribute('href') || '';
            const parentLi = link.closest('li');

            if (!parentLi) return; // Asegurar que hay un <li>

            // 2. Lógica de Activación:
            // Normalize el href y el path para la comparación
            const normalizedLinkPath = linkHref.replace('./', '').toLowerCase();
            
            // a) Determinar la URL base de la página actual
            // Esto maneja casos como /index.html o /tipos.html
            const currentFileName = currentPath.substring(currentPath.lastIndexOf('/') + 1);

            // 3. Aplicar la clase 'active'
            let isActive = false;
            
            if (normalizedLinkPath === currentFileName) {
                // Coincidencia exacta (ej. 'tipos.html' == 'tipos.html')
                isActive = true;
            } else if (normalizedLinkPath === 'index.html' && currentFileName === '') {
                // Caso especial: Si el href es 'index.html' y la URL es la raíz '/'
                isActive = true;
            }
            
            // 4. Establecer la clase
            if (isActive) {
                parentLi.classList.add('active');
                // 🚨 MEJORA A11Y: Indicar al lector de pantalla que este enlace es la página actual
                link.setAttribute('aria-current', 'page');
            } else {
                parentLi.classList.remove('active');
                link.removeAttribute('aria-current');
            }
        });
    }
}

// 4. Registro (Mantenemos el registro al final del módulo)
const tagName = 'nav-bar';
if (!customElements.get(tagName)) {
    customElements.define(tagName, NavBar);
}
export default NavBar;