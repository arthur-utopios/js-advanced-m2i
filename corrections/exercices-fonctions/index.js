function inverse(string) {
  return string.split("").reverse().join("");
}

console.log(inverse("hello world"));

function duplication(string) {
  return string
    .split("")
    .map((c) => `${c}${c}`)
    .join("");
}

console.log(duplication("abcdef"));

function atLeastTwo(array, callback) {
  return array.filter((element) => callback(element)).length >= 2;
}

const number = [1, 2, 3, 4, 5];

console.log(atLeastTwo(number, (number) => number % 2 === 0));
console.log(atLeastTwo(number, (number) => number > 3));
