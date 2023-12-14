const x = 1;        // Никогда х = 1 не будет доступен

function addOne(num) {      //Будет доступен, если сделаем export
    return x + num;
}


/* export */ 
function sum(a, b) {         // I вариант
    return a + b;
}

export {        // II вариант. Удобно, когда явно видем, что хотим экспортировать
    sum,
    addOne
}