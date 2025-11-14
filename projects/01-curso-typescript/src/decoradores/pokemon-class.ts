// --------------------------------------------------------
// DECORADORES BASE (Funciones Simples)
// --------------------------------------------------------

// Decorador de Clase simple: Recibe el constructor de la clase.
// Simplemente imprime el constructor (la clase en sí) en la consola.
function printToConsole( constructor: Function ) {
    console.log( constructor )
}

// Decorador de Fábrica de Clase: Devuelve un decorador de clase (función).
// Permite que el decorador reciba un argumento externo (print: boolean).
// Si 'print' es true, devuelve 'printToConsole'; si es false, devuelve una función vacía,
// lo que permite habilitar/deshabilitar el logging en tiempo de diseño.
const printToConsoleConditional = ( print: boolean = false ):Function => {
    if ( print ) {
        return printToConsole;
    }else {
        return () => {} // Función vacía (no hace nada)
    }
}


// Decorador de Clase simple: Recibe el constructor de la clase.
// Utiliza Object.seal() para prevenir que se añadan o eliminen propiedades
// tanto de la CLASE como del PROTOTIPO (métodos) de la clase en el futuro.
const bloquearPrototipo = function( constructor: Function ) {
    Object.seal( constructor ) // Sella las propiedades estáticas de la clase
    Object.seal( constructor.prototype ) // Sella los métodos (prototipo) de la clase
}

// --------------------------------------------------------
// DECORADOR DE MÉTODO
// --------------------------------------------------------

// Decorador de Fábrica de Método: Devuelve un decorador de método.
// Su objetivo es añadir LÓGICA DE VALIDACIÓN antes de ejecutar el método original.
function CheckValidPokemonId() {
    return function( target: any, propertyKey: string, descriptor: PropertyDescriptor ) {
        
        const originalMethod = descriptor.value;

        // Sobrescribe el método original por uno nuevo (el wrapper)
        descriptor.value = ( id: number ) => {
            if( id < 1 || id > 800 ) {
                // Si la validación falla, muestra un error y detiene la ejecución.
                return console.error('El id del pokemon debe de estar entre 1 y 800')
            } else {
                // Si la validación pasa, llama al método original (savePokemonToDB).
                return originalMethod(id)
            }
        }
    }
}

// --------------------------------------------------------
// DECORADOR DE PROPIEDAD
// --------------------------------------------------------

// Decorador de Fábrica de Propiedad: Devuelve un decorador de propiedad.
// Su objetivo es controlar la capacidad de ESCRITURA (readonly) de una propiedad.
function readonly( isWritable: boolean = true ):Function {
    return function(target: any, propertyKey: string ){
        
        // Define un Descriptor de Propiedad para el GETTER/SETTER
        const descriptor: PropertyDescriptor = {
            get() {
                // Cuando se intenta leer la propiedad, se devuelve un valor fijo ('Fernando').
                // NOTA: Esto no es lo que uno espera de un readonly. Debería devolver el valor real.
                console.log( this ) 
                return 'Fernando' 
            },
            set( this, val ){
                // Al intentar escribir (setear) el valor:
                // Se define la propiedad en la instancia con el nuevo valor.
                // Lo CRÍTICO es: si isWritable es TRUE (por defecto), Object.defineProperty lo hace WRITABLE: FALSE.
                // Si se llama con @readonly(false), lo hace WRITABLE: TRUE.
                // Hay una ligera inversión lógica en el decorador: !isWritable.
                Object.defineProperty( this, propertyKey, {
                    value: val,
                    writable: !isWritable, // Si isWritable=true, writable=false (readonly)
                    enumerable: false
                })
            }
        }
        
        return descriptor;
    }
}

// --------------------------------------------------------
// APLICACIÓN DE DECORADORES A LA CLASE POKEMON
// --------------------------------------------------------

// @bloquearPrototipo: Aplica el decorador 'bloquearPrototipo'.
// Resultado: Impide que se añadan nuevos métodos o propiedades a la clase/prototipo de Pokemon.
@bloquearPrototipo
// @printToConsoleConditional( false ): Aplica el decorador de fábrica con 'false'.
// Resultado: Devuelve una función vacía que NO IMPRIME la definición de la clase en la consola.
@printToConsoleConditional( false ) 
export class Pokemon {

    // @readonly(true): Aplica el decorador 'readonly'.
    // Resultado: Configura un Getter/Setter. Cuando se intenta escribir por primera vez,
    // redefine la propiedad 'publicApi' haciéndola NO ESCRIBIBLE (writable: false).
    @readonly(true) 
    public publicApi: string = 'https://pokeapi.co'

    constructor(
        public name: string
    ){}


    // @CheckValidPokemonId(): Aplica el decorador de método.
    // Resultado: Envuelve el método original 'savePokemonToDB' en una función de validación.
    // Solo si el 'id' está entre 1 y 800 se ejecuta el código interno de guardado en DB.
    @CheckValidPokemonId() 
    savePokemonToDB( id: number ) {
        console.log(`Pokemon guardado en DB ${ id }`);
    }

}