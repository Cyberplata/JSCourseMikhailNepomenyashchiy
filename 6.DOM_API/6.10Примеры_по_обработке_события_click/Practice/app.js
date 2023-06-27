//Решение от Александра Стекольщикова через forEach + addEventListener
/* 
const btns = document.querySelectorAll('.accordion');

btns.forEach(btn => {
   btn.addEventListener('click', togglePanel);
})

function togglePanel() {
   this.nextElementSibling.classList.toggle('show');
} 
*/


// Решение от Анастасии через цикл for + onclick
const accordions = document.querySelectorAll('.accordion');

for (let item of accordions) {
   item.onclick = function () {
      item.classList.toggle('active');
      item.nextElementSibling.classList.toggle('show');
   }
}