const elem = document.getElementById("logTypescript");

if (elem) {
    elem.textContent = "Typesript loaded!";
    console.log(elem);
}

/////////////////////////////////////////////////////////////////////////////////

const h1 = document.querySelector("h1");
console.log(h1?.textContent);

const title = document.querySelector(".title") as HTMLImageElement;
console.log(title.textContent);

const username = document.querySelector("#username") as HTMLInputElement;
console.log(username.placeholder);

/////////////////////////////////////////////////////////////////////////////////

class Movie {
    // Si se especifica el "modificador de acceso" (private, public, etc.) a las propiedades (title, durarion, etc.) dentro del constructor se puede montar todo así:
    constructor(
        public title: string,
        public duration: number,
        readonly hasOscars: boolean,
    ) {}

    getInfo() {
        return `Title: ${this.title} - Duration: ${this.duration} - Has Oscars: ${this.hasOscars}`;
    }
}
//===========================================
class HorrorMovie extends Movie {
    constructor(
        title: string,
        duration: number,
        hasOscars: boolean,
        public hasJumpScares: boolean
    ) {
        super(title, duration, hasOscars);
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
