/*
   Весь браузер обозначен для нас некой глобальной переменной Window.
   Эта глобальная переменная содержит несколько сущностей внутри себя:
      1. DOM а он внутри себя => document
      2. BOM - содержит разную информацию о браузере:
         a) navigator
         b) screen
         ...
         g) XMLHttpRequest - асинхронные запросы на сервер
      3. JavaScript
         a) Object 
         b) Array
         ...
      
   Можно записывать методы без Window => window.document => document
   Если нам нужна, например, запись document.body, как объекта то =>
*/
console.dir(document.body);