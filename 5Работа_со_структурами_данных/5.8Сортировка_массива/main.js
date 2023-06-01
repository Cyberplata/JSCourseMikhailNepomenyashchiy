// Sort

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

const numbers = [1, 2, 3, 4, 10, 12, 23];
const cities = ['Madrid', 'Amsterdam', 'Paris', 'Berlin', 'Kiev'];

// numbers.sort();
// numbers.sort((a, b) => b - a);
// numbers.reverse();
// console.log(numbers);

// cities.sort((a, b) => b - a);
// console.log(cities);

// function sorting(a, b) {
//    if (a > b) {
//       return -1;
//    }

//    if (a < b) {
//       return 1;
//    }

//    return 0;
// }

// cities.sort(sorting);
// console.log(cities);


developers.sort((a, b) => sorting(a.area, b.area));
// console.log(developers);



/*
                                       Практика на сортировку массивов.
Дан массив food и коллекция players. Создайте одну общую функцию сортировки, которая бы позволяла сортировать food по алфавиту от А-Я, 
а также игроков коллекции по ключу surname. И отсортируйте данные массивы, с помощью созданной функции. */

const food = ["Apple", "Melon", "Banana", "Yogurt", "Orange", "Stawberry"];

const players = [
   {
      id: 1,
      name: 'Cristiano',
      surname: 'Ronaldo',
      club: 'Juventus',
   },
   {
      id: 2,
      name: 'Lionel',
      surname: 'Messi',
      club: 'Barcelona',
   },
   {
      id: 3,
      name: 'Karim',
      surname: 'Benzema',
      club: 'Real Madrid',
   },
   {
      id: 4,
      name: 'Maxi',
      surname: 'Gomez',
      club: 'Valencia',
   },
   {
      id: 5,
      name: 'Quincy',
      surname: 'Promes',
      club: 'Spartak',
   },
];

function sorting(a, b) {
   if (a > b) {
      return 1;
   }

   if (a < b) {
      return -1;
   }

   return 0;
}

food.sort((sorting));
console.log(food);

players.sort((a, b) => sorting(a.surname, b.surname));
console.log(players);