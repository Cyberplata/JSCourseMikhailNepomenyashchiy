// Destructuring

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


// const cities = ['Madrid', 'Amsterdam', 'Paris', 'Berlin', 'Kiev'];
const cities = null;


const [
   madrid = 'Мадрид', 
   ams = 'Amsterdam', 
   ...otherCities
] = cities || [];
// console.log(madrid, ams, otherCities); // Мадрид Amsterdam []


// const numbers = [1, 2, [3, 4], 10, 12, 23];
// const [a, b, c] = numbers;
// console.log(a, b, c); // 1 2 [ 3, 4 ]

// const [
//    a,
//    b,
//    [c, d]
// ] = numbers;

// console.log(a, b, c, d); // 1 2 3 4

const numbers = null;
const [
   a = 0,
   b = 0,
   [c = 1, d = 1] = [],
] = numbers || [];
console.log(a, b, c, d)