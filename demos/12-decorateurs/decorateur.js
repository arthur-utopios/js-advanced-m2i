function timerDecorator(func) {
    return function wrapper(...args) {
        let start = Date.now();
        let result = func(...args);
        let end = Date.now();
        console.log(`La fonction ${func.name} a pris ${end - start}ms à s’exécuter`);
        return result;
    }
}

function logDecorator(func) {
    return function wrapper(...args) {
        console.log('Avant la fonction');
        let result = func(...args);
        console.log('Après la fonction');
        return result;
    }
}

function addNumber(a, b) {
    let cpt = 0;
    let total = 0;

    while(cpt < 1000000) {
        total = cpt * a * b;
        cpt++;
    }
}

addNumber = logDecorator(timerDecorator(addNumber));

addNumber(120049, 2054592010);
