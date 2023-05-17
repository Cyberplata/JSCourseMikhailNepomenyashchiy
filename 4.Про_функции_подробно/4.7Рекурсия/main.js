// Recursion
// Функция вызывает саму себя

// 1. Базовое условие терминальное - условие выхода из этой рекурсии
// 2. Правило движения по рекурсии

// function recurse() {
//    return recurse();
// }
//  recurse(); // ошибка - бесконечный цикл


function factorial(n) {
   if (n === 0) {
      return 1;
   }
   return n * factorial(n - 1);
}
console.log(factorial(3)); // 3 * 2 * 1


let counter = 0; // создаём счётчик

function repeater(char) {
   counter++;

   if (counter === 5) { // наш выход из рекурсии
      counter = 0;
      return char;
   }
   return char + repeater(char);
}

console.log(repeater('x'));
console.log(repeater('a2'));
