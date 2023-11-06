function sayHello() {
    console.log('Hello');
}

sayHello();

function sayHelloToSomeone(name) {
    console.log(`Hello ${name}`);
}

sayHello('Arthur');

// Utilisation des paramètres par défaut
function sayHelloInFrench(name='Arthur') {
    console.log(`Bonjour ${name}`);
}

sayHelloInFrench();

// Permet de passer une infinité de paramètres (rest parameter)
function sayHelloToPeople(...args) {
    args.forEach(name => console.log(`Hello ${name}`));
}

sayHelloToPeople('Jean', 'Marine', 'Romain');

function add(a, b) {
    return a + b;
}

console.log(add(1, 2));

const maFonction = function() {
    console.log('Hello world!');
}

maFonction();

function chaine(ch1, ch2, callback) {
    let concat = ch1 + ch2;
    return callback(concat);
}

function upp(chaine) {
    return chaine.toUpperCase();
}

console.log(chaine('Arthur', 'Dennetière', upp));

// Le return est implicite lorsqu'on est sur une ligne
const addNumber = (a, b) => a + b;

console.log(addNumber(2, 2));

// Si la fonction n'a qu'un argument, pas besoin des parenthèse
const showName = name => console.log(name);

showName('Henri');

const sayGoodbye = () => {
    console.log('Goodbye');
}

sayGoodbye();

// IIFE Immediately Invoked Fonction Expression
(() => console.log(this))();


let obj = {
    firstName: 'toto',
    sayHello() {
        // Correspond à l'objet en cours
        console.log(this);
    },
    // Correspond à l'environnement englobant
    sayGoodbye: () => console.log(this)
}

obj.sayHello();
obj.sayGoodbye();

let mySecondObject = {
    code: 123,
    girafe: {
        crier: () => console.log(this)
    },
    doSomething() {
        setTimeout(() => {
            console.log(this.code);
        });
    }
}

mySecondObject.girafe.crier();

mySecondObject.doSomething();


// exemple de binding d'une fonction

let userInfo = {
    username: "Admin",
    password: "Password"
}

function verifyCredentials() {
    console.log(this);
}

verifyCredentials = verifyCredentials.bind(userInfo);

verifyCredentials();

console.log(globalThis);