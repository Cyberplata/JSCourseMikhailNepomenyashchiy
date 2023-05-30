// Filter
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const users = [
   {
      id: 1,
      name: 'Brad Pette',
      movies: ['Troy', 'Sinbad: Legend of the Seven Seas'],
      isMarries: true,
   },
   {
      id: 2,
      name: 'Diana Moore',
      movies: ['Troy', 'Sinbad: Legend of the Seven Seas'],
      isMarries: false,
   },
   {
      id: 3,
      name: 'Olivie Giroud',
      movies: ['Sinbad: Legend of the Seven Seas'],
      isMarries: true,
   },
   {
      id: 4,
      name: 'Scott Parker',
      movies: ['Sinbad: Legend of the Seven Seas'],
      isMarries: false,
   },
];

// const oddNumbers = numbers.filter(num => num % 2 !== 0); //[1, 3 ...]
// const evenNumbers = numbers.filter(num => num % 2 === 0); //[2, 4 ...]
// console.log(oddNumbers);
// console.log(evenNumbers);
// console.log(numbers);

const marriedUsers = users.filter(user => user.isMarries);
const movieSearch = users.filter(user => user.movies.includes('Troy'))
// console.log(marriedUsers);
// console.log(movieSearch);



/*Практика на фильтрацию
1) Дан массив строк names. Создайте новый массив shortNames, 
сохранив в него только значения из оригинального массива, длина которых не превышает 5 символов.

2) Дана коллекция products. Создайте на базе нее новую коллекцию cheapProducts, 
поместив в нее только элементы оригинальной коллекции, ключ price в которых ниже 300.

3) Дана коллекция developers, где у каждого элемента имеется свойство skills. Создайте новую коллекцию tsDevelopers, 
добавив туда только те элементы оригинальной коллекции, у которой в массиве skills есть значение 'TypeScript'. */

//1
const names = ['Mikhail', 'Ivan', 'Albert', 'John', 'Ian', 'Petr', 'Alexandr', 'Oleg', 'Jaroslav', 'Vsevolod'];
const shortNames = names.filter(values => values.length < 5);
console.log(shortNames);

//2
const products = [
    {
        id: 1,
        name: 'Intro to JavaScript',
        category: 'books',
        price: 150,
    },
    {
        id: 2,
        name: 'Intro to CSS',
        category: 'books',
        price: 120,
    },
    {
        id: 3,
        name: 'Deep dive into JavaScript',
        category: 'books',
        price: 350,
    },
    {
        id: 4,
        name: 'Intro to PHP',
        category: 'books',
        price: 250,
    },
    {
        id: 5,
        name: 'Deep dive into PHP',
        category: 'books',
        price: 350,
    },
];

const cheapProducts = products.filter(value => value.price < 300);
console.log(cheapProducts);

//3
const developers = [
    {
        id: 1,
        fullName: 'Ivan Ivanov',
        skills: ['HTML', 'CSS', 'Git', 'Gulp', 'Pug']
    },
    {
        id: 2,
        fullName: 'Petr Petrov',
        skills: ['HTML', 'CSS', 'Git', 'JavaScript', 'npm']
    },
    {
        id: 3,
        fullName: 'Ian Melnikov',
        skills: ['HTML', 'CSS', 'Git', 'JavaScript', 'TypeScript']
    },
    {
        id: 4,
        fullName: 'Antonio Banderas',
        skills: ['HTML', 'CSS', 'Git', 'JavaScript', 'TypeScript', 'React']
    },
];

const tsDevelopers = developers.filter(value => value.skills.includes('TypeScript'));

console.log(tsDevelopers);