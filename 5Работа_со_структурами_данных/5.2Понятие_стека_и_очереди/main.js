// FIFO, FILO

// Queue - first in, first out (FIFO)
// push / shift

const arr =[];
arr.push(4);
arr.push(7);
arr.push(9);
console.log(arr); // [4, 7, 9]

arr.shift();
console.log(arr); // [7, 9] - плохое тем, что поменялись индексы

// Stack - first in last out (FILO)
// push / pop

const arr2 = []
arr2.push(1);
arr2.push(2);
arr2.push(3);
arr2.push(4);

console.log(arr2); // [1, 2, 3, 4]

arr2.pop();
arr2.pop();
console.log(arr2); // [1, 2] - хорошо тем, что индексы не изменяются