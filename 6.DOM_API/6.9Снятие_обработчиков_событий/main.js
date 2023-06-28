//Мы можем добавлять обработчик событий и удалять
//Если обработчик событий прописан в html, то можем его удалить

function fn1() {
   console.log('event!!!');
}

title.setAttribute('onclick', null);
title.onmouseenter; // null
title.onmouseenter = fn1; // event!!!
title.onmouseenter = null; // null


// С EventListener по-другому. Чтобы удалить событие у EventListener, нужно добавить вперёд remove
title.removeEventListener('click', fn1); // Удалили событие

//Если же мы распишем функцию во 2ом параметре - не удалилось событие!!!
title.addEventListener('click', function() { // Сначала добавляем событие клика
   console.log('event!!!');
});

title.removeEventListener('click', function() { // Теперь удаляем - но оно не удалится!!!
   console.log('event!!!');
});