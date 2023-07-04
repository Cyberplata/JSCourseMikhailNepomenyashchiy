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

   if(validate()) {
      // submit AJAX
      form.reset(); // если true очищает запрос
   } else {
      alert('Fix empty fields');
   }
}

function validate() {
   let isValid = true;

   inputs.forEach(input => {
      if (!input.value.trim()) { // проверка если строка пустая
         alert('All field are required')
         isValid = false;
      } else {
         input.style.borderColor = 'currentColor';
      }
   });

   return isValid;
}