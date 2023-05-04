//Тернарный оператор
const age = 15;

//age >= 18 ? console.log('Access granted') : console.log('Access denied');
console.log('Access', age >= 18 ? 'granted' : 'denied');

let status = 'idle';
let statusNumber = status === 'idle' ? 0 : 1;
console.log({ statusNumber });




// Задание 1
const spainCapital = 'Valencia';
let isCorrectAnswer;

// Конструкция if..else
// if (spainCapital === 'Madrid') {
//     isCorrectAnswer = true;
// } else if (spainCapital === 'madrid') {
//     isCorrectAnswer = true;
// } else if (spainCapital === 'MADRID') {
//     isCorrectAnswer = true;
// } else {
//     isCorrectAnswer = false;
// }

// Добавьте код здесь, переписав конструкцию выше на switch
// switch(spainCapital) {
//    case 'Madrid': 
//       isCorrectAnswer = true;
//       break;

//    case 'madrid':
//       isCorrectAnswer = true;
//       break;
      
//    case 'MADRID':
//       isCorrectAnswer = true;
//       break;

//    default:
//       isCorrectAnswer = false;
// }

// console.log(isCorrectAnswer)


// через тернарный оператор.
spainCapital === 'Madrid' ? isCorrectAnswer = true : 
spainCapital === 'madrid' ? isCorrectAnswer = true :
spainCapital === 'MADRID' ? isCorrectAnswer = true : 
isCorrectAnswer = false;
console.log({ isCorrectAnswer })



// Задание 2
const a = 1;
const b = 2;
// let result;

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }

// Добавьте код здесь, переписав конструкцию выше на тернарный оператор
// switch(a + b < 4) {
//    case a + b:
//       result = 'Мало';
//       break;

//    default:
//       result = 'Много';
//       break;
// }
// console.log(result);

//через тернарныый оператов

let result = (a + b < 4) ? 'Мало' : 'Много';
console.log(result);