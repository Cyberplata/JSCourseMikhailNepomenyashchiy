// Стандартные встроенные объекты

Number('12') // 12
Number({}) // NaN
Number(true) // 1
Number(false) // 0

String(000) // "0"
String(123) // "123"

Boolean('') // false
Boolean([]) // true;
Boolean('23') // true


Object.create({}) // {}
const obj = {a: 1, b: 2, c: 3}
Object.keys(obj) // ["a", "b", "c"]
Object.values(obj) // [1, 2, 3]
Object.entries(obj) // [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]


Array.isArray(obj) // false
Array.isArray([]) // true
Array.from('hello world') // ['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']
Array.of('sdsdsad') // ['sdsdsad']
Array.of(1, 'asd', true) // [1, "asd", true]