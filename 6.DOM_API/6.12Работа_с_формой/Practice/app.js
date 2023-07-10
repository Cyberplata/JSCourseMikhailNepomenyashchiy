/* 
Практика на работу с формой
Дана простая форма авторизации.
Необходимо отменить отправку формы по умолчанию и проверить поля с логином и паролем по следующим признакам:

1)поля непустые (если одно из полей пустое, вывести в консоль сообщение "All fields are required")

2)логин и пароль должны соответствовать одной и записей в массива registeredUsers файла app.js (в случае несовпадения, вывести в консоль сообщение "Incorrect login or password")

3)если учетные данные подходят, вывести в консоль сообщение "Access granted" и очистить поля формы. 
*/

const registeredUsers = [
   ['admin', 'KoI18'],
   ['manager', 'SuperMe108'],
   ['editor', '12345'],
];

const btn = document.querySelector('button');
const inputs = document.querySelectorAll('input');
const form = document.querySelector('form');

inputs.forEach(input => input.addEventListener('keypress', handleEvent));
form.addEventListener('submit', handleSubmit);

function handleEvent(event) {
   console.log(event);
   console.log(event.target);

   if (event.key === 'Enter') {
      event.preventDefault(); // метод - предотврати действие браузера по умолчанию
      event.target.nextElementSibling.focus();
   }
}

function handleSubmit(event) {
   event.preventDefault();
   console.log('submit');

   if (validate()) {
      // submit AJAX
      form.reset(); // если true очищает запрос
   } else {
      console.log('Fix fields!!!');
   }
}

function validate() {
   let isValid = true;
   const inputName = document.querySelector('input[name="login"]'); // получаем поле ввода с типом name
   const inputPassword = document.querySelector('input[name="password"]'); // получаем поле ввода с типом password

   if (!(inputName.value.trim() && inputPassword.value.trim())) { // проверка, что поля ввода не пустые
      console.log('All fields are required');
      return isValid = false;
   }

   for (let user of registeredUsers) { // находим подмассивы
      if (user[0] === inputName.value.trim() && user[1] === inputPassword.value.trim()) { // проверяем, что введённые данные равны
         console.log('Access granted');
         return isValid;
      } else {
         console.log('Incorrect login or password');
         return isValid = false;
      }
   }

   return isValid;
}