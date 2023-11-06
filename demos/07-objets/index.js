let user = { firstName: "Arthur", lastName: "Dennetière" };

console.log(user.firstName);
console.log(user["lastName"]);

user.age = 12;
console.log(user.age);

console.log(Object.entries(user));
console.log(Object.fromEntries([['id', 12], ['name', 'banane']]));
console.log(Object.keys(user));
console.log(Object.getOwnPropertyDescriptors(user));
console.log(Object.getPrototypeOf(user));

let dog = {
    name: "fiddle",
    aboyer() {
        console.log('woof woof');
    }
}

dog.aboyer();

// Optional chaining
// Retourne undefined au lieu de lever une exception
console.log(dog?.owner?.firstName);

console.log(dog.manger?.());