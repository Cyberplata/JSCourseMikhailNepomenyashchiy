// Immutable

const arr = [1, 2, 3, 4, 5];

// don't use pop, push, shift, unshift, sort, reverse

const newArr = arr.slice(0, 4); // [1, 2, 3, 4]
const newArr2 = [0, ...arr]; // [0, 1, 2, 3, 4, 5]

console.log(arr); // [1, 2, 3, 4, 5]
console.log(newArr); // [1, 2, 3, 4]
console.log(newArr2); // [0, 1, 2, 3, 4, 5]
console.log(arr); // [1, 2, 3, 4, 5]\


const obj = {
   a: 1,
   b: 2,
   c: 3,
}

//obj.d = 4; // mutation
//obj.a = 10; // mutation

const obj2 = {
   ...obj,
   a: 10,
   d: 4,
};

console.log(obj); // { a: 1, b: 2, c: 3 }
console.log(obj2); // { a: 10, b: 2, c: 3, d: 4 }
console.log(obj); // { a: 1, b: 2, c: 3 }