$(document).ready(function () {
    window.addEventListener('DOMContentLoaded', () => {
        const menu = document.querySelector('.menu'),
        menuItem = document.querySelectorAll('.menu__item'),
        hamburger = document.querySelector('.hamburger');
    
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        });
    
        menuItem.forEach(item => {
            item.addEventListener('click', () => {
                hamburger.classList.toggle('hamburger_active');
                menu.classList.toggle('menu_active');
            });
        });
    });

    $('.phones__slider').slick({
        arrows: false,
        slidesToShow: 1,
        speed: 800,
        zIndex: 1,
    });

    new WOW().init();
});