// Recursion
// Функция вызывает саму себя

// 1. Базовое условие терминальное - условие выхода из этой рекурсии
// 2. Правило движения по рекурсии

// function recurse() {
//    return recurse();
// }
//  recurse(); // ошибка - бесконечный цикл

/*
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
*/



/*                                                   Задача с курса
Напишите функцию getLength, которая в качестве параметра будет принимать массив и рекурсивно высчитывать его длину (количество элементов).

По условию задачи нельзя использовать встроенное свойство length массива.

Используйте метод pop для удаления элементов массива, чтобы подсчитать итоговое количество. 
*/


// function getLength(arr) {
//    let count = 0;

//    if(arr.pop() === undefined) { // Если мы вызовем pop() на пустом массив, он вернёт значение undefined
//       return count;
//    } else {
//       count++;
//       //console.log(count);
//       return count++ + getLength(arr);
//    }
// }


// console.log(getLength([1, 2, 3, 5, 7]));


//                                          Задача с ютуба от Михаила, решить рекурсией


//обычное решение
/*
function sumOfDigits(numbers) {
   let count = 0;
   let last;

   while(numbers !== 0) {
      last = numbers % 10; // находим последнюю цифру
      numbers = (numbers - last) / 10; // отбрасываем последние цифры
      count++;
   }
   return count;
}

console.log(sumOfDigits(100)) // 3
console.log(sumOfDigits(1000)) // 4
*/


// Рекурсия

// let count = 0;
// function sumOfDigits(numbers) {

//    if (numbers < 1) {
//       return;
//    } else {
//       count++;
//       return sumOfDigits(numbers / 10), count;
//    }
// }



console.log(sumOfDigits(100)) // 3
console.log(sumOfDigits(1000)) // 4