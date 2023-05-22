// Closure
// 1. Функции, которые возвращаются из других функций.
// 2. Возвращаемая функция запоминает scope (область видимости все переменные, которые вокруг себя она видит).

/*
function hello(name) {
   const helloName = (plt) => console.log('hello', name);

   return helloName;
}

const helloWorld = hello('world');
helloWorld();

const helloJohn = hello('John');
helloJohn();
*/

// Ещё пример
/*
function outer() {
   let counter = 0;

   function incrementCounter() {
      console.log(++counter);
   }

   return incrementCounter;
}

const myCounter1 = outer();
myCounter1();
myCounter1();
myCounter1();

const myCounter2 = outer();
myCounter2();
myCounter2();
myCounter2();
*/


/*
Практика на замыкание
Создайте функцию addByX. Которая принимает 1 параметр (число) и возвращает новую функцию, которая также принимает число и возвращает его сумму с исходным параметром.


Примеры использования:

const addByTwo = addByX(2);
addByTwo(3); // 5
addByTwo(5); // 7

const addByFour = addByX(4);
addByFour(3); // 7
addByFour(5); // 9 
*/

function addByX(num) {

   function numberСheck(changeNum) {
      console.log(changeNum + num);
   }
   return numberСheck;
}

const addByTwo = addByX(20);
addByTwo(3); // 23
addByTwo(5); // 25

const addByFour = addByX(40);
addByFour(3); // 43
addByFour(5); // 45 