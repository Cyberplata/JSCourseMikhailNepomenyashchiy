// Find is collection

// const cities = ['London', 'Paris', 'Madrid', 'Lisboa'];
// cities.includes('Madrid'); // true
// cities.indexOf('Paris') // 1


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



// console.log(developers.find(item => item.area === 'front_end')); // undefined
// console.log(developers.find(item => item.skills.includes('React'))); 
// {
//    id: 2,
//    fullName: 'Adam Smith',
//    skills: [ 'HTML', 'CSS', 'JavaScript', 'React' ],
//    area: 'frontend'
//  }
// console.log(developers.findIndex(item => item.skills.includes('Laravel'))); // 2
// console.log(developers.findIndex(item => item.skills.includes('C#'))); // -1





/* 
Практика на поиск в коллекции
Дана коллекция players. Найдите в ней объект с информацией об игроке с фамилией Messi и сохраните в новую переменную messi.*/

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

const messi = players.find(item => item.surname === 'Messi');
console.log(messi);