// Loop (basics)
// const numbers = [1, 2, 54, 88, 92, 100];

// let index = 0;
// while (index < numbers.length) {
//    numbers[index] *= 2; // numbers[index] = numbers[index] * 2 
//    console.log(numbers[index]);
//    index++;
// }

// console.log('Hello after while');


// Дан массив чисел. В цикле while обойдите массив и значения всех элементов с нечетным индексом умножьте на 2.

// Значения элементов с четным индексом должны остаться без изменения.

const numbers = [1, 2, 3, 4, 5, 6, 7]; 

function mainCode(numbers) {
   // numbers - это массив чисел
   // напишите ваш код к заданию до оператора return
   let index = 0;
   
   while(index < numbers.length) {
     if(index % 2 !== 0) {
       numbers[index] *= 2; 
     }
     index++;
   }
   return numbers;
}

console.log(mainCode(numbers));
