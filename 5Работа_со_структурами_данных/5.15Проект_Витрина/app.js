/*
   Есть небольшая страничка со списком товаров и корзиной.

   В app.js есть массив products со списком товаров со страницы и массив order, куда должны добавляться товары по клику на кнопку "Buy".

   На кнопках уже висят обработчики клика, вызывающие функцию addToBasket с передачей в нее id товара. 
   Необходимо доработать эту функцию, чтобы товары добавлялись в массив заказа, при этом один и тот же товар нельзя было добавить в заказ дважды.

   При добавлении в корзину товар автоматически будет отрисовываться на странице. 
   А при клике на его имя в корзине будет вызываться функция removeFromBasket. Необходимо доработать ее функционал, чтобы  товар удалялся из корзины.

   Метод rerenderTotalPrice отвечает за расчет общей стоимости товаров в корзине,  
   которая также выводится на страницу. Необходимо описать функционал перерасчета общей суммы.
*/


const products = [
   {
      id: 1,
      title: 'Lenovo Yoga',
      price: 3000,
   },
   {
      id: 2,
      title: 'Acer Aspire',
      price: 1800,
   },
   {
      id: 3,
      title: 'Dell Vostro',
      price: 3400
   },
];

let order = [];


// if (order[0] === products.find((el) => el.id === 1)) {
//    console.log(order);
//    alert('Товар уже в корзине!')
// }

function addToBasket(productId) {
   // TODO: добавить проверку наличия товара в заказе (при наличии выдать alert, что товар уже в корзине)
   
   if (productId === 1) {
      order.push((products.find((el) => el.id === 1)));
      console.log(order);
   }
   if (productId === 2) {
      order.push((products.find((el) => el.id === 2)));
      console.log(order);
   }
   if (productId === 3) {
      order.push((products.find((el) => el.id === 3)));
      console.log(order);
   }

   if (order.find((el) => el.id === 1) === order[0]) {
      alert('Товар уже в корзине!'); 
   }
   if (order.find((el) => el.id === 2) === order[1]) {
      alert('Товар уже в корзине!'); 
   }
   if (order.find((el) => el.id === 3) === order[2]) {
      alert('Товар уже в корзине!'); 
   }
   // TODO: если товар еще не в корзине, добавить его из массива products

   // Эти строчки не трогаем, они отвечают за переотрисовку страницы
   renderCart();
   rerenderTotalPrice();
}

function removeFromBasket(productId) {
   // TODO: описать логику удаления товара из корзины

   // Эти строчки не трогаем, они отвечают за переотрисовку страницы
   renderCart();
   rerenderTotalPrice();
}


function rerenderTotalPrice() {
   // TODO: опишите функционал подсчета общей стоимости заказа
   let budget = order.reduce((acc, user) => {
      return acc + user.price;
   }, 0);
   console.log(budget);

   // Не меняйте эту строчку
   document.getElementById('total').innerText = totalPrice;
}

// Этот метод остается без изменений
function renderCart() {
   const cart = document.getElementById('basket-items');

   cart.innerHTML = '';
   order.forEach(item => {
      const el = document.createElement('li');
      el.innerText = item.title;
      el.onclick = () => removeFromBasket(item.id);
      cart.appendChild(el);
   })
}