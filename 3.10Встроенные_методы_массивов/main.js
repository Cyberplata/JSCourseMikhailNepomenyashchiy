const numbers = [1, 2, 3, 4];

//pop, push
//shift, unshift

// console.log(numbers.includes(4));
// console.log(numbers.indexOf(2));
// console.log(numbers.indexOf(9));

// console.log(numbers.slice(0, 2));

// const nums2 = numbers.concat([6, 7, 8]);
// console.log(nums2);

// console.log(numbers.join(', '));

/* 
Использование методов массива
1) Дан массив fruits. Используя встроенный метод массива, определите есть ли в массиве значение 'orange' и ответ сохраните в константу hasOrange.

2) Дан массив cars. Используя встроенный метод массива, выберите из него первые три значения и сохраните их в константу favoriteCars.

3) Создайте константу otherCars, сохранив в нее оставшиеся три значения из исходного массива cars.
*/

// 1
const fruits = ['apple', 'banana', 'melon', 'orange'];
const hasOrange = fruits.includes('orange'); // TODO: сохранить булевое значение соответствующее наличию 'orange' в массиве fruits
console.log(hasOrange);
// 2
const cars = ['BMW', 'Nissan', 'VW', 'Skoda', 'Audi', 'Kia'];
const favoriteCars = cars.slice(0, 3); // TODO: сохраните в эту переменную первые три значения из массива cars
console.log('favoriteCars ', favoriteCars);
// 3
const otherCars = cars.slice(3); // TODO: сохраните в эту константу три последних значения из массива cars
console.log('otherCars ', otherCars);
