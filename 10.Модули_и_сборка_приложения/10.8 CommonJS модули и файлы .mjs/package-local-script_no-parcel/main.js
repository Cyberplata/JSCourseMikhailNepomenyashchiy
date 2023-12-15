// import {x} from './third.js';
// const z = require('./third.js');  //  require всегда найдёт значение по умолчанию { y: 1 }
const {z} = require('./third.js');  // undefined // 12 - если закомментировали экспорт по умолчанию. В webpack допустим подключают через require аналог import. 

console.log(z);