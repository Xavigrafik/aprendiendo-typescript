    const isTipos: boolean = true;
    if (isTipos) {
        console.log('isTipos');
}
    

// ENUM ////////////////////

enum AudioLevel {
    min, medium, max
}

let currentAudio = AudioLevel.medium;

console.log(AudioLevel);
console.log(currentAudio);


// VOID ////////////////////

    function callBatman(): void {/*no devuelve nada*/} 
    const a = callBatman();
    console.log(a);

    const callSuperman = (): void => {/*no devuelve nada*/} 
    console.log(callSuperman);


 // NEVER ////////////////////
    const datoNever = (message:string): never => {
        throw new Error(message)
    }
    // datoNever('mensaje Error del NEVER');
    // console.log('Este log nunca se verá por el never');
    
    
// NULL / UNDEFINED ////////////////////
 let nada:undefined = undefined
console.log(nada);


// REST  (resto...) ////////////////////
const fullName = (first: string, ...restArgs: string[]):string => {
    return `${first} ${restArgs.join(' ')}` 
}

const superman = fullName("Clark", "bb", "cc"); 
const batman   = fullName("Bruce", "bb"); 

console.log(superman,batman);
