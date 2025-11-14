import { Hero } from "./clases/hero";
import { printObject, genericFunction, genericFunctionArrow } from "./generics/generics";
import { IHero, IVillain } from "./interfaces";
import { Pokemon } from './decoradores/pokemon-class';

// //////////////////////////////////////////////
const ironman = new Hero("Iron Man", 1, 55);
console.log(ironman);
console.log(ironman.power);

const batman = new Hero("Batman", 2, 33);
// console.log(batman);
console.log(batman.power);

console.log('genericFunction va a devolver el tipo que recibe');

console.log(genericFunction(3.141692));
console.log(genericFunction("Pesazo string"));
console.log(genericFunction([1,2, 3, 4,5,]));
console.log(genericFunction(new Date()));



// //////////////////////////////////////////////
console.log();  
console.log("INICIO --> getPokemon");
import { getPokemon } from './generics/get-pokemon';

getPokemon(4)
.then( pokemon => console.log( pokemon ) )
.catch( error => console.error("AAA", error ) )
.finally( () => console.log('Fin de getPokemon')  )


// //////////////////////////////////////////////
console.log();  
console.log("INICIO --> Decoradores");

const charmander = new Pokemon('Charmander');

// (Pokemon.prototype as any).customName = 'Pikachu'

// console.log(charmander.savePokemonToDB(50));
// charmander.savePokemonToDB(10);
// charmander.publicApi = 'https://fernando-herrera.com';
console.log( charmander )


