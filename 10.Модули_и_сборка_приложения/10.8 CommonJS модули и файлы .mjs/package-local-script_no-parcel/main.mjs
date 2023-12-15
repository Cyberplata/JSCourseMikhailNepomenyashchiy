// import {x} from './third.js';
// const z = require('./third.js');  //  require всегда найдёт значение по умолчанию { y: 1 }
// const {z} = require('./third.js');  // undefined // 12 - если закомментировали экспорт по умолчанию. В webpack допустим подключают через require аналог import. 
// import {x} from './second.js'; // The requested module './second.js' is a CommonJS module

import {z} from './third.js'; // import через обычный получилось, потому что поменяли расширение файла на .mjs
import {x} from './second.mjs';

console.log(z);
console.log(x); 
// hi there 1
// 12
// 1