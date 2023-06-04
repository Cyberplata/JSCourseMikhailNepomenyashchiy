// Spread/rest operator

const developers = [
   {
      id: 1,
      fullName: 'Jonh Doe',
      skills: ['HTML', 'CSS', 'JavaScript'],
      area: 'frontend',
   },
   {
      id: 2,
      fullName: 'Adam Smith',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      area: 'frontend',
   },
   {
      id: 3,
      fullName: 'Will Dowson',
      skills: ['HTML', 'PHP', 'Laravel'],
      area: 'backend',
   },
   {
      id: 4,
      fullName: 'Sam Wilson',
      skills: ['HTML', 'CSS', 'JavaScript', 'PHP'],
      area: 'fullstack',
   },
];

// Работа ...spread с массивами
const numbers = [1, 2, 3, 4, 10, 12, 23];
const cities = ['Madrid', 'Amsterdam', 'Paris', 'Berlin', 'Kiev'];

const arr2 = ['Riga', ...cities, 'Moscow'];

// console.log(arr2);
// console.log(...cities);


// Работа ...spread с объектами
const dev1 = {
      id: 1,
      fullName: 'Jonh Doe',
      skills: ['HTML', 'CSS', 'JavaScript'],
      area: 'frontend',
};

const dev2 = {...dev1};

dev2.id = 18;
dev2.fullName = 'Mikhail';


console.log(dev1);
console.log(dev2);


// Работа ...spread с функциями
// sum(...numbers);

console.log(sum(4, 3));
console.log(sum(4, 3, 1));
console.log(sum(4, 3, 1, 2));

// args []
function sum(a, b, ...args) {
   let result = a + b;
   for(let i = 0; i < args.length; i++) {
      result += args[i];
   }

   return result;
}