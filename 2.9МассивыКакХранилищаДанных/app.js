// Array (basics)
// const numbers = [12, 32, 38, 41, 55];
// console.log(numbers[0]);
// numbers[0] = 18;
// console.log(numbers[0]);
// console.log(numbers[numbers.length - 1]);

// const strs = ['abc', 'bcd'];
// // str[12] = 'sd';
// strs.push('new item');
// strs.push('new item 2');
// console.log(strs);

// console.log(strs.pop());
// console.log(strs);


// 1) Создайте массив numbers и сохраните в нем 3 числа - 1, 2 и 3
const numbers = [1, 2, 3];
console.log(numbers);
// 2) Создайте переменную luckyNumber и сохраните в него последнее число из массива (используя индекс массива).
const luckyNumber = numbers[numbers.length - 1];
console.log(luckyNumber);
// 3) Удалите последний элемент массива и добавьте в конец массива два новых числа.
numbers.pop();
console.log(numbers);
numbers.push(28, 22);
console.log(numbers);