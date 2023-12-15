// import {sum, addOne as add1} from './src/helpers/first';    // Могли бы использовать несколько, если бы потребовалось. Переименновываем через as
// import * as first from './first';   // Как альтернатива записи выше. * это всё. first это объект
import {sum, addOne as add1, firstName, x} from './src/helpers'; // По этому пути будут доступны все helpers
// import {firstName} from './src/helpers/second';


// import print, {x} from './src/helpers/third';    // импорт по умолчанию без {}, назвать можем как угодно, но лучше назвать так же

console.log('Hello from entry point', firstName);
console.log(sum(2, 4));
console.log(add1(5));
// console.log(first.sum(2, 4));   // Как альтернатива записи выше
// console.log(first.addOne(5));