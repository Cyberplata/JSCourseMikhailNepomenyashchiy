const x = 1;        // Никогда х = 1 не будет доступен
console.log('Hello from first.js'); // В любом случае исполнится, так как код считывается сверху вниз

function addOne(num) {      //Будет доступен, если сделаем export
    return x + num;         // допуск к x возможен только через замыкание и никакой х не можем экспортировать
}


/* export */ 
function sum(a, b) {         // I вариант
    return a + b;
}

/* export {        // II вариант. Удобно, когда явно видем, что хотим экспортировать
    sum,
    addOne      // Могли бы использовать несколько, если бы потребовалось
}; */
export { sum, addOne };