/* import {sum, addOne as add1} from './first'; */    // Могли бы использовать несколько, если бы потребовалось. Переименновываем через as
import * as first from './first';   // Как альтернатива записи выше. * это всё. first это объект
import {firstName} from './second';

console.log('Hello from entry point', firstName);
// console.log(sum(2, 4));
// console.log(add1(5));
console.log(first.sum(2, 4));   // Как альтернатива записи выше
console.log(first.add1(5));