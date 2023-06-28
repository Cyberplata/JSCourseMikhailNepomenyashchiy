/*
Когда мы работаем с событиями нас может интересовать не просто какое-то дейстивие, а может интересовать само событие, мы можем захотеть проверить, что произошло, где произошло итд
*/
const btn = document.querySelector('button');
const inputs = document.querySelectorAll('input');

inputs.forEach(input => input.addEventListener('keypress', handleEvent));

// btn.addEventListener('click', handleEvent);


function handleEvent(event) {
   console.log(event);
   console.log(event.target);

   if (event.key === 'Enter') {
      event.target.nextElementSibling.focus();
   }
}



