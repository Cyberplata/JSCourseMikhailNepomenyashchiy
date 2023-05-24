/*
Создайте функцию censor, которая не принимает аргументов. Функция должна возвращать новую функцию, принимающую опционально 1 или 2 параметра (оба - строки).

1. Когда возвращаемая функция принимает 2 параметра, то она ничего не возвращает, а сохраняет полученные значения как пару (пара - это массив с двумя значениями).

2. Когда возвращаемая функция принимает 1 параметр, то она возвращает полученную строку, заменив в ней все слова, согласно ранее сохранённым парам.

Пример использования:

const changeScene = censor();

changeScene('PHP', 'JS');

changeScene('backend', 'frontend');

console.log(changeScene('PHP is the most popular programming language for backend web-development')); //
должно распечатать 'JS is the most popular programming language for frontend web-development'


Примечание: в переданной строке, в качестве единственного параметра, замена происходит согласно парам, 
где первое значение пары - что мы хотим заменить, второе значение пары - на что хотим заменить.
*/


function censor() {
   let savedCouple1;
   let savedCouple2;

   function changeScene(param1, param2 = undefined) {
      if (param1 !== undefined && param2 !== undefined) {
         // savedCouple1 = console.log((param1 + ' ' + param2).split(' '));
         savedCouple1 = (param1 + ' ' + param2).split(' ');
         console.log(savedCouple1);
      } else {
         savedCouple2 = param1.replace(/PHP/gi, 'JS').replace(/backend/gi, 'frontend');
         //savedCouple2 = param1.replace(/backend/gi, 'frontend');
         return savedCouple2;
      }
   }
   return changeScene;
}

const changeScene = censor();

changeScene('PHP', 'JS'); // ['PHP', 'JS']
changeScene('backend', 'frontend'); // ['backend', 'frontend']
console.log(changeScene('PHP is the most popular programming language for backend web-development'));
//должно распечатать 'JS is the most popular programming language for frontend web-development'