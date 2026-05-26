const mobile = document.getElementById('menu-mobile');
const menu = document.querySelector('.menu');

mobile.addEventListener('click', () => {

    menu.classList.toggle('active');

});

/* SUBMENUS MOBILE */

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(drop => {

    drop.addEventListener('click', () => {

        if(window.innerWidth <= 900){

            drop.classList.toggle('active');

        }

    });

});