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
/* 
<section id="map">
   <div>
      <h2>Map</h2>
      <button data-target="#top" data-mt-duration="1500">Go Top</button>
   </div>
</section> 
*/
   
   moveTo.move(target, {
      duration: 1800
   });
}

tippy('[data-tippy-content]', {
   theme: 'light', // тема
   animation: 'scale', // анимация
});

OverlayScrollbars(document.querySelectorAll(".overlay"), { 
   className: 'os-host-flexbox'
});

const swiper = new Swiper('.swiper', {
   // Optional parameters
   direction: 'horizontal',
/*    slidesPerView: 2,
   spaceBetween: 20, */
   effect: 'cube',
   cubeEffect: {
      slideShadows: false,
   },

   // If we need pagination
   pagination: {
      el: '.swiper-pagination',
   },

   // Navigation arrows
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },

});


IMask(document.getElementById('phone'), {
   mask: '+{7}(000)-000-00-00',
});

IMask(document.getElementById('age'), {
   mask: Number,
   min: 0,
   max: 108
});

IMask(document.getElementById('date'), {
   mask: Date,
   lazy: false,
   overwrite: true,
   autofix: true,
   blocks: {
      d: {
         mask: IMask.MaskedRange, 
         placeholderChar: 'd', 
         from: 1, 
         to: 31, 
         maxLength: 2
      },
      m: {
         mask: IMask.MaskedRange, 
         placeholderChar: 'm', 
         from: 1, 
         to: 12, 
         maxLength: 2
      },
      Y: {
         mask: IMask.MaskedRange, 
         placeholderChar: 'y', 
         from: 1900, 
         to: 2999, 
         maxLength: 4
      }
   }
})

const toggleBtn = document.getElementById('toggler');
const form = document.querySelector('form');
toggleBtn.addEventListener('click', handleToggle);

function handleToggle() {
   if (form.style.opacity == 0) {
      anime({
         targets: form,
         opacity: 1,
         height: form.scrollHeight,
         duration: 350,
         easing: 'easeInOutQuad',
      });
   } else {
      anime({
         targets: form,
         opacity: 0,
         height: 0,
         duration: 350,
         easing: 'easeInOutQuad',
      });
   }
}