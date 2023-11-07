class Personnage {
    #nom;
    _vie;
    #force;

    constructor(nom, vie, force) {
        this.nom = nom;
        this._vie = vie;
        this.force = force;
    }

    get nom() {
        return this.#nom;
    }

    set nom(value) {
        this.#nom = value;
    }

    get vie() {
        return this._vie;
    }

    set vie(value) {
        this._vie = value;
    }

    get force() {
        return this.#force;
    }

    set force(value) {
        this.#force = value;
    }

    get degats() {
        return this.force;
    }

    attaquer(cible) {
        if(!(cible instanceof Personnage)) {
            console.log("La cible n'est pas une instance de Personnage /!\\");
            return
        }

        cible.vie -= this.degats;
        console.log(`${this.nom} fait une attaque de ${this.force} dégâts à ${cible.nom}`);
    }

    toString() {
        return `nom: ${this.nom}, vie: ${this.vie}, force: ${this.force}`
    }

}

class Guerrier extends Personnage {
    #armure;

    constructor(nom, vie, force, armure) {
        super(nom, vie, force);
        this.armure = armure;
    }

    get armure() {
        return this.#armure;
    }

    set armure(value) {
        this.#armure = value;
    }

    get vie() {
        return this._vie + this.armure; 
    }

    set vie(value) {
        this._vie = value; 
    }

    get degats() {
        return this.force + this.armure;
    }
}

class Magicien extends Personnage {
    #mana;

    constructor(nom, vie, force, mana) {
        super(nom, vie, force);
        this.mana = mana;
    }

    get mana() {
        return this.#mana;
    }

    set mana(value) {
        this.#mana = value;
    }

    get degats() {
        return this.force + this.mana;
    }

    static soigner(magicien, cible) {
        if(!(magicien instanceof Magicien)) {
            console.log("L'instance n'est pas un magicien");
            return;
        }

        if(!(cible instanceof Personnage)) {
            console.log("La cible n'est pas une instance de Personnage /!\\");
            return
        }

        cible.vie += magicien.mana;
        console.log(`${magicien.nom} soigne ${cible.nom} de ${magicien.mana} points de vie`);
    }
}

let musclor = new Guerrier('Musclor', 5, 2, 1);
let conan = new Guerrier('Conan le barbare', 7, 5, 1);
let gandalf = new Magicien('Gandalf le blanc', 2, 3, 3);
let merlin = new Magicien("Merlin l'enchanteur", 3, 2, 4);

musclor.attaquer(conan);
gandalf.attaquer(merlin);
Magicien.soigner(gandalf, merlin);
Magicien.soigner(gandalf, merlin);
Magicien.soigner([], merlin);

console.log(musclor.toString());
console.log(conan.toString());
console.log(gandalf.toString());
console.log(merlin.toString());