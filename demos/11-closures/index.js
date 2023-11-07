function makeAdder(number) {
    let numToAdd = number;

    return function adder(num) {
        return numToAdd + num;
    }
}

let add2 = makeAdder(2);
console.log(add2(5)); // 7

let add10 = makeAdder(10);
console.log(add10(5)); // 15