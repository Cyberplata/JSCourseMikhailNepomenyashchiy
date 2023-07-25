/* В разметке дана кнопка #myBtn и блок #spoiler, который по умолчанию скрыт.

Задача:

1.При клике на кнопку блок #spoiler должен отображаться.

2.При повторном клике на кнопку блок #spoiler снова должен скрываться.

3.Когда блок #spoiler отображается, должна быть возможность закрыть его нажатием клавиши Escape на клавиатуре

4.Когда блок #spoiler скрыт, клавиша Escape обрабатываться не должна.
 */



document.getElementById('myBtn').addEventListener('click', toggleSpoiler);

function toggleSpoiler() {
   const spoiler = document.getElementById('spoiler');
   spoiler.classList.toggle('closed');

   if(spoiler.classList.contains('closed')) {
      dettachSpoilerEvents();
   } else {
      attachSpoilerEvents();
   }
}

function attachSpoilerEvents() {
   document.addEventListener('keydown', handleEscape);
}

function dettachSpoilerEvents() {
   document.removeEventListener('keydown', handleEscape);
}

function handleEscape(event) {
   console.log(event.key);

   if(event.key === 'Escape') toggleSpoiler();
}