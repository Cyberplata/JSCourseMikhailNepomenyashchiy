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
         input.style.borderColor = 'red';
         isValid = false;
      } else {
         input.style.borderColor = 'currentColor';
      }
   });

   return isValid;
}

