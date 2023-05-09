// numbers methods
const num = 1180000.15555;
console.log(num.toFixed(2)); //Метод toFixed() форматирует число, используя запись с фиксированной запятой

console.log(num.toLocaleString('ru-RU')); //Метод toLocaleString() возвращает строку с языкозависимым представлением числа


/*
Использование встроенных методов чисел и строк
1) Даны две строки correctAnswer и userAnswer. Необходимо привести обе строки к нижнему регистру и проверить содержит ли userAnswer в себе строку correctAnswer. Булевый ответ сохранить в переменную isCorrect.

2) Дана переменная salary с числовым значением. Необходимо создать переменную salaryFixed, в которой исходное числовое значение округлено до двух знаков после запятой.
*/

// 1.
const correctAnswer = 'JavaScript';
const userAnswer = ' javaScript! ';
let isCorrect; // TODO: сохранить true или false в зависимости от выполнения условия по заданию 1.

// const newCorrectAnswer = correctAnswer.toLowerCase();
// const newUserAnswer = userAnswer.toLowerCase();
if(userAnswer.toLowerCase().includes(correctAnswer.toLowerCase())) {
   isCorrect = true;
} else {
   isCorrect = false;
}

console.log(isCorrect);

// 2.
const salary = 15000.2085;
const salaryFixed = +salary.toFixed(2);

console.log(salaryFixed);