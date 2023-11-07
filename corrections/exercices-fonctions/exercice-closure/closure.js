function makeCounter(n) {
    let increment = n;
    let counter = 0;

    return {
        count() {
            counter += increment;
            return counter;
        },
        reset() {
            counter = 0;
        },
        set(value) {
            counter = value;
        }
    }
}

let counter01 = makeCounter(1);
console.log(counter01.count());
let counter05 = makeCounter(5);
console.log(counter05.count());
counter05.reset();
counter05.set(-5);
console.log(counter05.count());

console.log(counter01.counter);