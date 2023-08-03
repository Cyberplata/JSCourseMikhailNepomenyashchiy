/* function myFunction() {
   var dots = document.getElementById("dots");
   var moreText = document.getElementById("more");
   var btnText = document.getElementById("myBtn");

   if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
   } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
   }
} */

const dots = document.getElementById('dots');
const moreText = document.querySelector(".more");
const btnText = document.getElementById("myBtn");

btnText.addEventListener('click', handleEvent);

function handleEvent(event) {
   console.log(event);
   console.log(event.target);

   moreText.classList.toggle('more');
   dots.classList.toggle('more');

   returnText();
}

function returnText() {
   if (btnText.innerHTML === "Read more") {
      btnText.innerHTML = "Read less";
   } else {
      btnText.innerHTML = "Read more";
   }

   console.log(btnText.innerHTML);
   console.log(btnText.innerText);
   console.log(btnText.textContent);
}

