// Варианты записи функций


// 1. Function Declaration
sum(1, 4); //нормально для Function Declaration сначала вызывать функцию 
function sum(a, b) {
   return a + b;
}

// 2. Function Expression
const sum = function (a, b) {
   return a + b;
}


// 3. IIFE ((Immediately Invoked Function Expression)
(function (a, b) {
   return a + b;
})(5, 34)


//4. Arrow function
const sum = (a, b) => {
   return a + b;
}
const sum = (a, b) => a + b;

add1(5); // ошибка
const add1 = x => x + 1;
