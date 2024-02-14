console.log("Esta conectado");


let menuIcon = document.querySelector('.menu-icon');
let menuNav = document.querySelector('.menu-nav');

menuIcon.addEventListener('click', () => {
    if (menuNav.style.display === 'block') {
        menuNav.style.display = 'none';
    } else {
        menuNav.style.display = 'block';
    }
});
