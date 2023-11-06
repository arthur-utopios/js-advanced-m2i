// Déclaration de variable dans un scope
let firstName = "toto";

const PASSWORD = "motdepasse";

// Ne peut pas être réaffecté
const userName = "user";

try {
  userName = "username";
} catch (e) {
  console.log(e.message);
}

// Les opérations sur les nombres ne déclenchent pas d'exceptions
console.log("azerty" / 123);
console.log(1 / 0);

// Déclaration de chaînes
let string = "toto";
let string2 = 'tata';
let string3 = `titi`;

// Template string
console.log(`La variable string vaut: ${string}`);

console.log('La variable string2 vaut:' + string2);

// Déclaration de variable sans initialisation = undefined
let variableUndefined;

console.log(variableUndefined);


console.log(typeof string);
console.log(typeof variableUndefined);

// Déclaration d'un booléen
let isAdmin = true;
console.log(isAdmin);
isAdmin = !isAdmin;
console.log(isAdmin);