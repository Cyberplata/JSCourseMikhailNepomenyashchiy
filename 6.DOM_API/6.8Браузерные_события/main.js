const title = $0;

function fn1() {
   console.log('event!!!');
}

//Можем в html добавить в атрибут
<h3 id="События клавиатуры" onclick='fn1()'>События клавиатуры</h3>


//Есть два других способа:
   
   //Первый
const title = $0;
title.onmouseenter = fn1;

   //Второй способ
const title = $0;
title.addEventListener('click', fn1);