// Scope

let isValid = false;
const str = 'Hello';

function isString(str) {
   const isValid = typeof str === "string";

   return isValid;
}

const res = isString('123')

// let message = '';
const age = 15;

if (age >= 18) {
   let message = 'Hello';
} else {
   let message = 'Adios';
}
console.log(message); //message is not defined

{
   var myName = 'Mikhail';
}
console.log(myName);

for (var prop in obj) {}

console.log(prop);