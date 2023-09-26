const moveTo = new MoveTo();

const buttons = document.querySelectorAll('button');

buttons.forEach(btn => moveTo.registerTrigger(btn));

const link = document.querySelector('a');
link.addEventListener('click', handleClick);

function handleClick(event) {
   event.preventDefault();

   console.log(this.href, this.getAttribute('href')); 
   // http://127.0.0.1:5500/7%D0%A0%D0%B0%D0%B1%D0%BE%D1%82%D0%B0_%D1%81%20%D0%B3%D0%BE%D1%82%D0%BE%D0%B2%D1%8B%D0%BC%D0%B8_%D0%B1%D0%B8%D0%B1%D0%BB%D0%B8%D0%BE%D1%82%D0%B5%D0%BA%D0%B0%D0%BC%D0%B8/7.3%D0%9F%D0%BB%D0%B0%D0%B2%D0%BD%D1%8B%D0%B9_%D1%81%D0%BA%D1%80%D0%BE%D0%BB%D0%BB/index.html#map #map

   const target = document.querySelector(this.getAttribute('href'));
   console.log(target);
   
   moveTo.move(target, {
      duration: 1800
   });
}