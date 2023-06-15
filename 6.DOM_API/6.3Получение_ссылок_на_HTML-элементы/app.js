/*
Практика на получение ссылок на HTML-элементы
Дана html страница с разметкой. В app.js создайте переменные со следующими элементами:

   1. в переменную title сохраните элемент заголовка h1

   2. в переменную btn сохраните элемент кнопки button#btn

   3. в переменную subtitle сохраните элемент h2 из второй секции (с текстом Second section)

   4. в переменную sections сохраните все элементы section 
*/

//1
const title = document.querySelector('h1');
console.log(title); // <h1 class="gray">Hello DOM</h1>

//2
const btn = document.querySelector('#btn');
console.log(btn); // <button id="btn">Click me</button>

//3
// const subtitle = document.getElementsByClassName('title gray'); // // HTMLCollection [h2.title.gray]
const subtitle = document.querySelector('.title.gray'); // NodeList [h2.title.gray]
console.log(subtitle); 

//4
const sections = document.querySelectorAll('section') // NodeList(3) [section, section, section]
// const sections = document.getElementsByTagName('section'); // HTMLCollection(3) [section, section, section]
console.log(sections); 
