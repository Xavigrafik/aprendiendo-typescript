(() => {
    
    class Avenger {
        
        static readonly avgAge: number = 33; 

        constructor(
            public name: string,
            private realName: string, 
            public age: number,
        ) {
            console.log("Avenger class, existe!");
            
        }

        public getPrivateName(): string {
            return `private: ${this.realName}` ;
        }

        get getFullName(): string {
            return `GET: ${this.name} is ${this.realName}`;
        }

        
        set setFullName(name : string) {
            this.name = name;
        }
        
    }



    /////////////////////////////////////////////////////////////
    class Xmen extends Avenger {
        constructor(
            // Ya recibe public/private de la clase Avenger pero se define
            name: string,
            realName: string, 
            age: number,
            // La nueva propiedad 'isMutant' sí lleva el modificador 'public'
            public isMutant:boolean
        ) {
            super(name, realName, age);
            console.log("Xmen class, existe!");
        }
    }


    ////////////////////////////////
    const ironman: Avenger = new Avenger('Ironman', 'Tony Stark', 55);
    const lobezno: Xmen = new Xmen('Lobezno', 'Logan', 155, true);
    


    console.log(); 
    ////////////////////////////////
    console.log(ironman); 
    console.log(ironman.getFullName); 
    console.log(ironman.getPrivateName()); 

    console.log(); 
    ////////////////////////////////
    console.log(lobezno); 
    console.log(lobezno.getPrivateName()); 
    lobezno.setFullName = 'Nombre_SETEADO!'
    console.log(lobezno.getFullName); 
    
    
    ////////////////////////////////



})();

(() => {
    console.log();
    console.log("CLASS VEHÍCULO:");
    
    /**
 * Clase Vehiculo: Ejemplo de POO usando TypeScript
 */
class Vehiculo {

    // 1. Propiedad Estática y de Solo Lectura (readonly)
    // Compartida por todas las instancias.
    static readonly MAX_RUEDAS: number = 4;
    
    // 2. Propiedad Privada (accesible solo dentro de la clase)
    // Se inicializa a 0.
    private velocidad: number = 0; 

    // 3. Constructor: Utilizamos el "TS Shorthand" (atajo de TS).
    // Esto declara y asigna automáticamente las propiedades 'marca' y 'modelo'.
    constructor(
        public marca: string, // Propiedad pública
        public modelo: string  // Propiedad pública
    ) {
        // El cuerpo del constructor queda limpio.
    }
    
    // 4. Método Público (comportamiento)
    public acelerar(incremento: number): void {
        if (incremento <= 0) {
            // El tipado estricto nos ayuda a validar la entrada.
            console.warn("ADVERTENCIA: El incremento debe ser un número positivo.");
            return;
        }
        // Accedemos a la propiedad privada 'velocidad'
        this.velocidad += incremento;
        console.log(`${this.marca} ${this.modelo} ha acelerado a ${this.velocidad} km/h.`);
    }

    // 5. Getter (Accessor: Lectura de propiedad dinámica, sin paréntesis)
    // Se invoca como si fuera una propiedad: miCoche.velocidadActual
    get velocidadActual(): string {
        return `La velocidad actual es: ${this.velocidad} km/h.`;
    }
    
    // 6. Setter (Accessor: Escritura controlada de propiedad, sin paréntesis)
    // Se asigna como una propiedad: miCoche.velocidadActual = 120;
    set velocidadActual(nuevaVelocidad: number) {
        if (nuevaVelocidad < 0) {
            console.error("ERROR: La velocidad no puede ser negativa. Valor recibido: " + nuevaVelocidad);
            return;
        }
        // Modificamos el valor privado
        this.velocidad = nuevaVelocidad;
        console.log(`Velocidad ajustada a: ${nuevaVelocidad} km/h.`);
    }

    // 7. Método Estático (solo se llama en la clase, no en la instancia)
    static descripcion(): string {
        // Accede a la propiedad estática 'MAX_RUEDAS'
        return `Un Vehículo tiene un máximo de ${Vehiculo.MAX_RUEDAS} ruedas.`;
    }
}


// --- USO Y DEMOSTRACIÓN ---

// Tipado estricto al instanciar
const miCoche: Vehiculo = new Vehiculo('Tesla', 'Model S');

// Uso del Getter
console.log(miCoche.velocidadActual); // Salida: La velocidad actual es: 0 km/h.

// Uso del Método
miCoche.acelerar(80); // Llama al método

// Uso del Setter
miCoche.velocidadActual = 120; // Llama al 'set'

// Intento de acceder a la propiedad privada (TS no lo permite en tiempo de compilación)
// console.log(miCoche.velocidad); // TS Error: Property 'velocidad' is private

// Uso del Método Estático
console.log(Vehiculo.descripcion());
})();




