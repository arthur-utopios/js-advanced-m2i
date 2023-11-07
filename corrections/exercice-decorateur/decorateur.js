function spy(f) {
    function wrapper(...args) {
        // On récupère les arguments passés à la fonction
        wrapper.calls.push(args);
        // return f(...args);
        return f.apply(this, args);
        // return f.call(this, ...args);
    }
    // On ajoute la propriété calls dans notre wrapper
    wrapper.calls = [];

    return wrapper;
}

let sayHello = (name) => console.log(name);
sayHello = spy(sayHello);

let concat = (prenom, nom, age) => prenom + nom + age;
concat = spy(concat);

sayHello('hello');
sayHello('world');
sayHello('!');

console.log(sayHello.calls);

concat('toto', 'titi', 10);
concat('toto', 'titi', 10);
concat('toto', 'titi', 10);

console.log(concat.calls);