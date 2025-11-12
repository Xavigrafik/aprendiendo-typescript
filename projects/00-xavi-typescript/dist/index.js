"use strict";
const logTypescript = document.getElementById("logTypescript");
if (logTypescript) {
    const progressBar = logTypescript.querySelector(".progress .progress-bar");
    const widths = [25, 50, 75, 100];
    const timeInterval = 500;
    let i = 0;
    if (progressBar) {
        const intervalId = setInterval(() => {
            const width = widths[i];
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
}
const h1 = document.querySelector("h1");
console.log(h1 === null || h1 === void 0 ? void 0 : h1.textContent);
const title = document.querySelector(".title");
console.log(title === null || title === void 0 ? void 0 : title.textContent);
const username = document.querySelector("#username");
console.log(username === null || username === void 0 ? void 0 : username.placeholder);
class Movie {
    constructor(title, duration, hasOscars) {
        this.title = title;
        this.duration = duration;
        this.hasOscars = hasOscars;
    }
    getInfo() {
        return `Title: ${this.title} - Duration: ${this.duration} - Has Oscars: ${this.hasOscars}`;
    }
}
class HorrorMovie extends Movie {
    constructor(title, duration, hasOscars, hasJumpScares) {
        super(title, duration, hasOscars);
        this.hasJumpScares = hasJumpScares;
        this.hasJumpScares = hasJumpScares;
    }
    displayAlert() {
        console.log("This movie is really scary");
    }
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
