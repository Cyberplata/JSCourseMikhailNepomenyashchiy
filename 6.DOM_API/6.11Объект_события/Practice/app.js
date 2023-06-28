/* 
               Практика на работу с объектом события
В html даны кнопки с id clicker1 и clicker2. У кнопок есть атрибут data-clicked, в котором хранится информация о количестве кликов по данной кнопке.

Создайте одну общую функцию для обработки клика на эти кнопки, которая будет увеличивать информацию о количестве кликов на той кнопке, на которую был сделан клик.

Предусмотрите, что количество кнопок в дальнейшем может меняться - три, пять кнопок и так далее. 
*/

// const btn1 = document.querySelector('#clicker1');
// const btn2 = document.querySelector('#clicker2');

const btns = document.querySelectorAll('button');

btns.forEach(btn => btn.addEventListener('click', increaseClicks))

function increaseClicks() {
   // console.log(event);
   // console.log(event.target);
   
   this.dataset.clicked++;

}
// btn1.addEventListener('click', increaseClicks)
// btn2.addEventListener('click', increaseClicks)

/*    if (event.type === "click" && event.target.id === 'clicker1') {
      console.log(event.target.dataset.clicked);
      event.target.dataset.clicked++;
   }
   if (event.type === "click" && event.target.id === 'clicker2') {
      console.log(event.target.dataset.clicked);
      event.target.dataset.clicked++;
   } */