const Rectangle = require('./Rectangle.js');
const {sayHello, multiplyByTwo} = require('./tools.js');
const tools = require('./tools.js');

let rectangle = new Rectangle(10, 5);

console.log('Surface:', rectangle.area());
console.log('Périmètre', rectangle.perimeter());

sayHello('world');
console.log(multiplyByTwo(4));