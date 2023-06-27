/* const btn = document.getElementById('toggle-btn');
const div = document.querySelector('.element');

   // 1. Объект стилей
function toggleDivVisibility() {
   if (div.style.display === 'none') {
      div.style.display = 'block';
   } else {
      div.style.display = 'none'
   }
}
btn.addEventListener('click', toggleDivVisibility); */


   // 2. Способ через добавление класс в html/css

/* .hide {
   display: none;
}  */


const btn = document.getElementById('toggle-btn');
const div = document.querySelector('.element');


function toggleDivVisibility() {
   div.classList.toggle('hide')
}
btn.addEventListener('click', toggleDivVisibility); 




