$(document).ready(function () {
    $('.phones__slider').slick({
        arrows: false,
        slidesToShow: 1,
        speed: 800,
    });

    new WOW().init();
});