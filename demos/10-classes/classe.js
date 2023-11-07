class Animal {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log('Hello');
    }
}

let a = new Animal('Toto');

console.log(a);
console.log(a.name);
a.sayHello();

// Héritage
class Dog extends Animal {
    constructor(name, age) {
        // Appel du constructeur parent
        super(name);
        this.age = age;
    }

    sayHello() {
        // Appeler la méthode du parent
        super.sayHello();
        // Rajout d'un nouveau comportement
        console.log('woof woof');
    }
}

let rex = new Dog('Rex', 5);
rex.sayHello();

class Tools {
    // Membre lié à la classe et non à une instance
    static fileDirectory = '';

    static openFolder() {
        console.log(`Opening ${Tools.fileDirectory} ...`);
    }
}

Tools.fileDirectory = './toto.txt';
Tools.openFolder();

class Table {
    #pieds;
    nom;

    constructor(nom, pieds) {
        this.#pieds = pieds;
        this.nom = nom;
    }

    get pieds() {
        console.log('Je suis dans le getter');
        return this.#pieds;
    }

    set pieds(value) {
        console.log('Je suis dans le setter');
        this.#pieds = value;
    }
}

let maTable = new Table('Ikéa', 4);
console.log(maTable);
console.log(Object.keys(maTable));
console.log(maTable.pieds);
maTable.pieds = 1;
console.log(maTable.pieds);

// mon objet chien est une instance de Animal
console.log(rex instanceof Animal);