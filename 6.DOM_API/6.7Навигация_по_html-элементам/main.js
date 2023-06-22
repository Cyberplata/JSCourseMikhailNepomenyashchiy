// Выбирать все элементы со страницы бывает для работы избыточно, порой имя ссылку на какой-то элемент один, мы можем дальше использовать навигацию относительно этого элемента. Мы можем получить его родителя, получить дочерний элемент, соседний элемент.

const anchor = $0;

   // a) Обращаясь к anchor мы можем получить его родителя => .parentElement
anchor.parentElement //родитель <header></header>
console.dir(anchor.parentElement)

   // b) Также можно получить дочерний элемент через .children или посчитать количество .childrenElementCount
anchor.childElementCount // 1
anchor.children // получаем коллекцию эл-тов

// И раз коллекция мы можем обращаться по индексу =>
anchor.children[0] // <svg></svg>

// Либо можем обратится к 1-му элементу =>
anchor.firstElementChild

// И к последнему эл-ту
anchor.lastElementChild

// Но обящательно нужно писать Element => 
anchor.firstChild // #text

   // c) Получение соседних элементов .nextElementSibling
<button></button>

// Если нам нужен следующий элемент => 
anchor.nextElementSibling.nextElementSibling // <div class="page-header-main"></div>

// Либо мы могли положить кнопку в отдельную переменную, а потом вызвать .nextElementSibling =>
const btn = anchor.nextElementSibling
btn.previousElementSibling // получаем предыдущего соседа // <a></a> 