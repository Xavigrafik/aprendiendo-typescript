"use strict";
const logTypescript = document.getElementById("logTypescript");
if (logTypescript) {
    // Es una buena práctica asegurar que el elemento existe antes de buscar descendientes
    const progressBar = logTypescript.querySelector(".progress .progress-bar");
    // Configuración
    const widths = [25, 50, 75, 100];
    const timeInterval = 500;
    let i = 0;
    if (progressBar) {
        // Tipificación: el ID de setInterval en el navegador es un number.
        const intervalId = setInterval(() => {
            const width = widths[i];
            // 1. Condición de Parada: El índice se ha agotado.
            if (width === undefined) {
                clearInterval(intervalId);
                logTypescript.textContent = "Typescript loaded OK!";
                return;
            }
            const prevWidth = i > 0 ? `w-${widths[i - 1]}` : 'w-0';
            const newClass = `w-${width}`;
            progressBar.classList.remove(prevWidth);
            progressBar.classList.add(newClass);
            console.log(`Clase aplicada: ${newClass}`);
            i++;
        }, timeInterval);
    }
    // El setTimeout original se elimina para evitar la dependencia de calcular el tiempo.
}
/////////////////////////////////////////////////////////////////////////////////
const h1 = document.querySelector("h1");
console.log(h1 === null || h1 === void 0 ? void 0 : h1.textContent);
const title = document.querySelector(".title");
console.log(title.textContent);
const username = document.querySelector("#username");
console.log(username.placeholder);
/////////////////////////////////////////////////////////////////////////////////
class Movie {
    // Si se especifica el "modificador de acceso" (private, public, etc.) a las propiedades (title, durarion, etc.) dentro del constructor se puede montar todo así:
    constructor(title, duration, hasOscars) {
        this.title = title;
        this.duration = duration;
        this.hasOscars = hasOscars;
    }
    getInfo() {
        return `Title: ${this.title} - Duration: ${this.duration} - Has Oscars: ${this.hasOscars}`;
    }
}
//===========================================
class HorrorMovie extends Movie {
    constructor(title, duration, hasOscars, hasJumpScares) {
        super(title, duration, hasOscars);
        this.hasJumpScares = hasJumpScares;
        this.hasJumpScares = hasJumpScares;
    }
    displayAlert() {
        console.log("This movie is really scary");
    }
    // sobrescribe el getInfo de Movie
    getInfo() {
        return "Some movie info";
    }
}
const movie1 = new Movie("El Señor de los Anillos", 300, true);
const movie2 = new Movie("Harry Potter", 120, true);
movie1.title = "Star Wars";
console.log(movie1, movie2);
console.log(movie1.getInfo());
const scream = new HorrorMovie("Scream", 90, false, true);
console.log(scream);
scream.displayAlert();
console.log(scream.getInfo());
