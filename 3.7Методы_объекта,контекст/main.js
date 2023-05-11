// const developer = {
//    name: 'Vasiliy',
//    surname: 'Petrov',
//    age: 30,
//    skills: ['JavaScript', 'TypeScript', 'CSS'],
//    isMaried: false,
//    addAge() {
//       this.age++;
//       console.log(this);
//    },
//    getMaried() {
//       this.isMaried = true;
//    },
//    getName() {
//       this.name = 'Platon';
//    },
// };
// developer.addAge();


                                             //Использование методов объекта

/*Дан объект person. Добавьте ему два метода:

   1. greeting - вызов метода должен выводить в консоль "Hello"

   2. changeSurname - метод должен принимать новое имя и изменять значение свойства surname исходного объекта.*/

const person = {
   name: 'Anna',
   surname: 'Dance',
   age: 18,
   greeting() {
      console.log("Hello");
   },
   changeSurname(newName, surname) {
      this.newName = newName;
      this.surname = surname;
      console.log(this);
   },
};
person.greeting();
person.changeSurname("Platon", "Kynin");

