let toto = 0;

// Opérateur de coalescence vérifie si la valeur est null ou undefined
let firstName = toto ?? 'Arthur';
console.log(firstName);

// Vérifie que la valeur est undefined, null, 0, '', false
let lastName = toto || 'Dennetière';

let age = 12;

if(age) {
    console.log(`Vous avez ${age} ans`);
}