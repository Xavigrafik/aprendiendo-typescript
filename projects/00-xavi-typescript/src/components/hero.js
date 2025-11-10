/**
 * Un Web Component para mostrar un bloque de índice o título con un estilo específico.
 * Utiliza Shadow DOM para encapsulación y una propiedad 'title' para el contenido de H2.
 */
class HeroBlock extends HTMLElement {
    // 1. Define los atributos observables
    static get observedAttributes() {
        return ['title'];
    }

    constructor() {
        super();
        // 2. Adjunta el Shadow DOM en modo 'open'
        this.attachShadow({ mode: 'open' });
        this.render();
    }

    /**
     * 3. Método para renderizar el contenido dentro del Shadow DOM.
     */
    render() {
        if (!this.shadowRoot) return;

        // Estilos CSS encapsulados
        const style = document.createElement('style');
        style.textContent = `
            :host {
                background-color: var(--bs-info);
                padding: 1em;
                width: 100%;
                display: block;
            }
            h2 {
                margin: 0;
                font-size: 1.5rem; 
                line-height: 1.2;
            }
        `;

        // Estructura HTML del componente
        const wrapper = document.createElement('div');
        wrapper.className = 'bg-info';
        
        // El contenido del H2 se obtiene de la propiedad 'title'
        const h2 = document.createElement('h2');
        // Usamos getAttribute para obtener el valor inicial
        h2.textContent = this.getAttribute('title') || 'INDEX (Sin Título)'; 

        wrapper.appendChild(h2);

        // Limpia y añade el contenido al Shadow Root
        this.shadowRoot.innerHTML = ''; // Limpieza antes de la inserción
        this.shadowRoot.append(style, wrapper);
    }

    /**
     * 4. Lifecycle Hook: Llamado cuando un atributo listado en observedAttributes cambia.
     */
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'title' && oldValue !== newValue) {
            // Re-renderizar solo el H2 si el atributo 'title' cambia
            const h2 = this.shadowRoot?.querySelector('h2');
            if (h2) {
                h2.textContent = newValue || 'INDEX (Sin Título)';
            } else {
                // Si el H2 no existe (lo cual no debería ocurrir), forzamos un re-render completo
                this.render(); 
            }
        }
    }
    
    /**
     * 5. Getter/Setter para la propiedad (facilita el uso programático con JS/TS)
     */
    set title(value) {
        // Al establecer la propiedad, actualiza el atributo para que se active attributeChangedCallback
        this.setAttribute('title', value);
    }

    get title() {
        return this.getAttribute('title') || '';
    }
}

// 6. Registro del Web Component
customElements.define('hero-block', HeroBlock);
