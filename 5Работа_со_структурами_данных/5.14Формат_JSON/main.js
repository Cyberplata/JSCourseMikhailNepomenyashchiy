// JSON - JavaScript Object Notation

// const obj = { a: 1 }
// console.log(String(obj)); // [object Object]

// 1. JSON.parse() из строки JSON распарсили в объект JS

const a = `{
   "firstName": "Mikhail",
   "age": 36,
   "skills": ["CSS"],
   "languages": {
      "key": "value"
   }
}`

const myObj = JSON.parse(a);
console.log(myObj.firstName); // Mikhail
console.log(myObj); 
/*{
  firstName: 'Mikhail',
  age: 36,
  skills: [ 'CSS' ],
  languages: { key: 'value' }
} */


// 2. JSON.stringify - обратная операция из объекта в строку JSON

const obj = {
   a: 1,
   print() { console.log('Hello'); }
}

console.log(JSON.stringify(obj)); // {"a":1}