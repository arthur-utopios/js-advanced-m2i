import Rectangle from './Rectangle.js';
import {sayHello as say, multiplyByTwo} from './tools.js';
// import * as tools from './tools.js';

let rectangle = new Rectangle(10, 5);

console.log('Surface:', rectangle.area());
console.log('Périmètre', rectangle.perimeter());

say('world');
console.log(multiplyByTwo(4));