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


//Преобразование данных в формат JSON
// Дана коллекция players. Создайте новую переменную jsonPlayers и сохраните в ней оригинальную коллекцию в формате JSON.

const players = [
   {
       id: 1,
       name: 'Andres',
       surname: 'Iniesta',
       club: 'Vissel Cobe',
   },
   {
       id: 2,
       name: 'Eden',
       surname: 'Hazard',
       club: 'Real Madrid',
   },
   {
       id: 3,
       name: 'Mo',
       surname: 'Salah',
       club: 'Liverpool',
   },
   {
       id: 4,
       name: 'Lionel',
       surname: 'Messi',
       club: 'Barcelona',
   },
];

const jsonPlayers = JSON.stringify(players);
console.log(jsonPlayers);
/*
[{"id":1,"name":"Andres","surname":"Iniesta","club":"Vissel Cobe"},
{"id":2,"name":"Eden","surname":"Hazard","club":"Real Madrid"},
{"id":3,"name":"Mo","surname":"Salah","club":"Liverpool"},
{"id":4,"name":"Lionel","surname":"Messi","club":"Barcelona"}]
*/