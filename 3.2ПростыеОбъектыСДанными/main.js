// Objects
const developer = {
   name: 'Vasiliy',
   surname: 'Vasiliy',
   age: 30,
   skills: ['JavaScript', 'TypeScript', 'CSS'],
   isMaried: false,
};

developer.isMaried = true;

delete developer.isMaried;

console.log(developer.isMaried);