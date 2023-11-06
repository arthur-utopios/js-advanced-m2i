function addOne(value) {
    if(typeof value === 'object') {
        value.number++;
        console.log("Fonction addOne par référence: " + value.number);
    } else {
        value++;
        console.log("Fonction addOne par valeur: " + value);
    }
    
}

// Passage de paramètre par valeur
let monNombre = 2;
addOne(monNombre);
console.log(monNombre);

// Passage de paramètre par référence
let obj = {number: 2};
addOne(obj);
console.log(obj.number);
