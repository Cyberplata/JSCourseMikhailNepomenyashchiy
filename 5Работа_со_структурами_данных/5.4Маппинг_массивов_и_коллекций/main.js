// Mapping
// map, forEach

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// const arr = [];
// function doubleNum(num) {
//    arr.push(num * 2);
// }

function print(el) {
   console.log(el);
}
// const result = numbers.forEach(print);
// console.log(result);
// console.log(numbers);

function doubleNum(num) {
   return num * 2;
}

/*const result = numbers.map(num => num * 2); // [2, 4, 6 ...]
console.log(result);
console.log(numbers);*/



//Дан массив чисел numbers. Создайте на его основе новый массив doubledNumbers, в котором каждый элемент из оригинального массива умножен на два.
const numbers = [1, 2, 3];

function mainCode(numbers) {
   // напишите код до оператора return
   const doubledNumbers = numbers.map(num => num * 2);
   return doubledNumbers;
}
const result = mainCode(numbers);

// console.log(result);
// console.log(numbers);


/*Дана коллекция developers. Создайте на ее основе новую коллекцию middleDevelopers, 
увеличив значения ключа salary на 500, а также добавив к ключу skills значение 'TypeScript'. */

const developers = [
   {
       id: 1,
       fullName: 'Anton Petrov',
       skills: ['HTML', 'CSS', 'JavaScript', 'Git', 'React'],
       salary: 1000,
   },
   {
       id: 2,
       fullName: 'Ivan Ivanov',
       skills: ['HTML', 'CSS', 'JavaScript', 'Git', 'Vue'],
       salary: 950,
   },
   {
       id: 3,
       fullName: 'Albert Sidorov',
       skills: ['HTML', 'CSS', 'JavaScript', 'Git', 'jQuery'],
       salary: 850,
   },
];


// const middleDevelopers = developers.map(function(newValues) {
//    return {
//       ...newValues,
//       skills: [...newValues.skills, 'TypeScript'],
//       salary: newValues.salary + 500,
//    };
// })

// console.log(middleDevelopers);


//Решение Сухова Станислава
function addNewCollection(obj) {
   const newObj = {
      ...obj,
   };

   newObj.skills = [...newObj.skills, 'TypeScript'];
   newObj.salary += 500;

   return newObj;
}

const middleDevelopers = developers.map(addNewCollection);

// console.log(developers);
console.log(middleDevelopers);
// console.log(developers);
