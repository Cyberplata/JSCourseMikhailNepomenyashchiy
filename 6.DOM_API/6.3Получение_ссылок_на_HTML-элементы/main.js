/* 
Наша задача научиться получать элементы по их содержимому в нашу JavaScript переменную
Например, постараться получить элемент <h1>
*/
   // 1. Можно через children => document.body.children.h1 но это долго и сложно
   // 2. Можно искать элемент через querySelector('') - принемает любой валидный css селектор
   //    (селектор по тэгу, по классу, по id, по вложенности).
      // a) Поиск по тегу:
            document.querySelector('h1') // <h1>Руководство по DOM</h1>
            document.querySelector('h2') // найдёт 1ый <h2>
            const title = document.querySelector('h1') // присвоили в переменную и дальше можно что-то делать...
            title // <h1>Руководство по DOM</h1>
      // b) Поиск по идентификатору:
            document.querySelector('#dom_интерфейсы') // <h2 id="dom_интерфейсы"><a href="#dom_интерфейсы">DOM интерфейсы</a></h2>
      // с) Поиск по классу:
            document.querySelector('.main-page-content') // <acticle class="main-page-content" lang="ru">...</acticle>

         // Но есть нюансы, допустим есть много ссылко, как выбрать третию?
/* <ul>
    <li></li>
    <li></li>
    <li></li> //?
</ul> */
         // Или понадобится вся эта коллекция <li>

   // 3. document.querySelectorAll('') - выбирает все элементы со страницы
      document.querySelectorAll('li') // NodeList(338) [li, li, li ...]
      
      // Но как конкретезировать это дело
      document.querySelectorAll('.index li') // NodeList(273) [ li, li ...]

   // 4. document.getElementById('nav-access') - по id - "#" не надо ставить
      document.getElementById('nav-access') // <ul id="nav-access" class="ally-nav">...</ul>
   // 5. document.getElementByClassName('page-header') - по классу - "." не надо ставить
      document.getElementByClassName('page-header') // HTMLCollection [header.page-header]
   // 6. document.getElementsByTag('') - по имени тега
      document.getElementsByTag('p') // [p, p, ...]


