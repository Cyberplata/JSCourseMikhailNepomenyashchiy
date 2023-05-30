// Reduce

const staff = [
   {
      id: 1,
      name: 'John Doe',
      salary: 1000,
   },
   {
      id: 2,
      name: 'Sara Smith',
      salary: 900,
   },
   {
      id: 3,
      name: 'Elton John',
      salary: 1100,
   },
   {
      id: 4,
      name: 'Mo Williams',
      salary: 1000,
   },
];

//Считаем общий бюджет всех сотрудников

// const budget = staff.reduce((acc, user,) => {
//    if (user.salary >= 1000) {     // Можно через if else если большая системы
//       return acc + user.salary;
//    } else {
//       return acc;
//    }
// }, 0);

//Или без if else => 

const budget = staff.reduce((acc, user) => {
   return acc + user.salary;
}, 0);
console.log(budget); // 4000

//Считаем общий бюджет низкооплачиваемых сотрудников
const budgetForSmallPersonal = staff.reduce((acc, user) => {
   if (user.salary < 1000) {
      return acc + user.salary;
   }
   
   return acc;
}, 0);
console.log(budgetForSmallPersonal); // 900


//Хотим получить коллекцию с зарплатами

const salaries = staff.reduce((acc, user) => {
   return [...acc, user.salary]
}, []);
console.log(salaries); // [ 1000, 900, 1100, 1000 ]


/*Практика на reduce
Дана коллекция товаров в корзине order. У каждого товара есть цена price и количество quantity.

Подсчитайте общую стоимость товаров в корзине и сохраните значение в переменной totalPrice. */

const order = [
   {
       id: 1,
       name: 'Лопата',
       price: 1000,
       quantity: 1,
   },
   {
       id: 2,
       name: 'Удочка',
       price: 1200,
       quantity: 2,
   },
   {
       id: 3,
       name: 'Ведро',
       price: 500,
       quantity: 3,
   },
   {
       id: 4,
       name: 'Мороженое',
       price: 100,
       quantity: 8,
   },
];

const totalPrice = order.reduceRight((acc, user) => {
   // const temporary = user.price * user.quantity; return acc + temporary;
   return acc + user.price * user.quantity;
}, 0);

console.log(totalPrice); //5700


//В одну строчку решение
//const totalPrice = order.reduce((acc, el) => acc + el.price * el.quantity, 0);