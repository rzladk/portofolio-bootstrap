const menu = document.querySelector('#menu');
const navbarNav = document.querySelector('.navbar-nav');    

menu.addEventListener('click', function () {
    navbarNav.classList.toggle('active');
})

