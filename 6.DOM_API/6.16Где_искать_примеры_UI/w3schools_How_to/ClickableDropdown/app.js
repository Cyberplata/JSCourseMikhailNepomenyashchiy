document.querySelector('.dropbtn').addEventListener('click', toggleDropdownMenu);

function toggleDropdownMenu() {
   const myDropdown = document.getElementById('myDropdown');

   myDropdown.classList.toggle('show');

   console.log(myDropdown);
   //this.nextElementSibling.classList.toggle('show');
   
   if (!myDropdown.classList.contains('show')) {
      dettachhDropdownMenuEvents();
   } else {
      attachDropdownMenuEvents();
   }
}

function attachDropdownMenuEvents() {
   document.addEventListener('keydown', handleEscape);
}

function dettachhDropdownMenuEvents() {
   document.removeEventListener('keydown', handleEscape);
}

function handleEscape(event) {
   console.log(event.key);
   if (event.key === 'Escape') {
      toggleDropdownMenu();
   }
}