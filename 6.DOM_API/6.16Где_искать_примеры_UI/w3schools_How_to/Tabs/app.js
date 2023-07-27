// function openCity(evt, cityName) {
//    var i, tabcontent, tablinks;
//    tabcontent = document.getElementsByClassName("tabcontent");
//    for (i = 0; i < tabcontent.length; i++) {
//       tabcontent[i].style.display = "none";
//    }
//    tablinks = document.getElementsByClassName("tablinks");
//    for (i = 0; i < tablinks.length; i++) {
//       tablinks[i].className = tablinks[i].className.replace(" active", "");
//    }
//    document.getElementById(cityName).style.display = "block";
//    evt.currentTarget.className += " active";
// }


const tablinks = document.querySelectorAll('.tablinks');
tablinks.forEach(link => {
   link.addEventListener('click', openCity);
});

function openCity(event) {
   console.log(event);
   console.log(event.target);
   console.log(event.target.innerText);

   const cities = document.querySelectorAll('.tabcontent');
   cities.forEach(city => {
      console.log(city);
      console.log(cities);

      if (event.target.innerText === 'London') cities[0].classList.toggle('open');
      if (event.target.innerText === 'Paris') cities[1].classList.toggle('open');
      if (event.target.innerText === 'Tokyo') cities[2].classList.toggle('open');
   });
}




// function openCity(event, cityName) {
//    const tabcontent = document.querySelectorAll('.tabcontent');
//    for (let cont of tabcontent) {
//       cont.onclick = function() {
//          cont.style.display = "none";
//       }
//    }

//    const tablinks = document.querySelectorAll('.tablinks');
//    for (let link of tablinks) {
//       link.onclick = function() {
//          // link.classList.toggle('active');
//          link.className = link.className.replace(' active', '');
//       };
//    }
//    document.getElementById(cityName).style.display = 'block';
//    event.currentTarget.className += ' active'
// }