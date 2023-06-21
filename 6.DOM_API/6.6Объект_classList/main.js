// Когда на нужно работать с классами с каким-либо элементом на странице легче-удобнее всего работать не со строками
<div class="localized-content-note notecard inline neutral">...</div>
$0.className //"localized-content-note notecard inline neutral" - строка и удалить notecard из середины будет проблематично

const el = $0;
el.classList // DOMTokenList(4) ["localized-content-note", "notecard". "inline", "neutral"...]


   // 1. classList - это некий специальный массивоподобный эл-т и поэтому можем работать через специальные методы
   //    a) .add("...") - можем через метод add() добавить новый класс
el.classList.add('active')
el.classList // DOMTokenList(5) ["localized-content-note", "notecard". "inline", "neutral", "active"...]
   
   //    b) .remove("...") - удаляем класс
el.classList.remove('active') // удаляем класс 'active'

   //    c) .contains("...") - проверяет есть ли класс 'active' в элементе
el.classList.contains('active') // false

   //    d) .toggle("...") - метод сам проверяет есть ли в нашем элементе данный класс, если есть - удаляет, если нет - добавляет
el.classList.toggle('active') // не было active, метод добавил
el.classList.toggle('active') // удалил класс active

