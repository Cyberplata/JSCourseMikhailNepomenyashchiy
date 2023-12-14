const x = 1;

function addOne(num) {
    return x + num;
}


export function sum(a, b) {         // I вариант
    return a + b;
}

export {        // II вариант. Удобно, когда явно видем, что хотим экспортировать
    sum
}