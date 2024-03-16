const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

function scrollToSection(event) {
  event.preventDefault();
  const href = event.currentTarget.getAttribute('href');
  const section = document.querySelector(href);
  
  const topo = section.offsetTop - 55; 
  
  window.scrollTo({
    top: topo,
    behavior: 'smooth',
  });
}

linksInternos.forEach((link) => {
  link.addEventListener('click', scrollToSection);
});



document.addEventListener("DOMContentLoaded", function() {
   var navbarToggler = document.querySelector("button.navbar-toggler");

   var menu = document.querySelector(".navbar-collapse");

   var links = document.querySelectorAll('.js-menu a[href^="#"]');
   links.forEach(function(link) {
       link.addEventListener("click", function() {
           navbarToggler.click();
       });
   });

   document.addEventListener("click", function(event) {
       if (!menu.contains(event.target) && !navbarToggler.contains(event.target)) {
           navbarToggler.click();
       }
   });
});



