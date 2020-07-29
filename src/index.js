// import $ from "jquery";
// import Swiper from 'swiper';

window.onload = function() {

    var swiper = new Swiper('.swiper-container', {
        cssMode: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination-h'
        },
        mousewheel: true,
        keyboard: true,
    });

    var swiper = new Swiper('.swiper-container-clients', {
        slidesPerView: 6,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

}