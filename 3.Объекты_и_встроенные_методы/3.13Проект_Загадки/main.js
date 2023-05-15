/*
Опишите метод checkAnswer объекта riddle, поместив в него в логику проверки правильного ответа на загадку.

Должны соблюдаться следующие условия:

1. В случае правильного ответа выдать пользователю сообщение "Правильный ответ" (в alert и console.log)

2. В случае неправильного ответа выдать пользователю сообщение "Неправильный ответ"

3. В случае окончания попыток выдать пользователю сообщение "Игра окончена"

 

Дополнительно (по желанию - не проверяется автотестами):

- предоставьте пользователю подсказки в случае неправильного ответа

- подсказки предлагаются после первых двух неправильных ответов

- после третьего неправильного ответа подсказка не нужна (как вариант, можно сообщить правильный ответ)

*/

var riddle = {
   question: 'Висит груша нельзя скушать',
   correctAnswer: 'лампочка',
   hints: ['это несъедобное', 'это не фрукт'],
   tries: 3,
   checkAnswer(guessedAnswer) {
      // TODO: написать логику проверки правильного ответа
      // alert для пользователя, console.log()
      if (this.correctAnswer === guessedAnswer) {
         alert(`Правильный ответ`);
         console.log(`Правильный ответ`);
         this.tries = 0;
      } else if (this.correctAnswer !== guessedAnswer && this.tries !== 0) {
         alert(`Неправильный ответ, осталось попыток: ${this.tries - 1}. \nПодсказка: ${this.hints.join(' и ')}`);
         console.log(`Неправильный ответ, осталось попыток: ${this.tries - 1}. \nПодсказка: ${this.hints.join(' и ')}`);
         this.tries--;
      } else {
         console.log(`Игра окончена, правильный ответ: ${this.correctAnswer}`);
         return alert(`Игра окончена, правильный ответ: ${this.correctAnswer}`);
      }
   },
}

window.onload = function () {
   document.getElementById('riddle').innerText = riddle.question;
}

function check(guessedAnswer) {
   var input = document.getElementsByTagName('input')[0];

   var guessedAnswer = input.value;


   if (guessedAnswer) {
      // TODO: вызвать функцию checkAnswer у объекта загадки, передав туда ответ
      riddle.checkAnswer(guessedAnswer);
         // if(typeof guessedAnswer !== 'string') {
         //    throw new Error('Введите пожалуйста слово!');
         // }
         // return guessedAnswer;
   }
}
// try {
//    check();
//    console.log('not seen');
// } catch (error) {
//    console.log(error.message);
// }
// console.log('The end!');