$(function() {
    //初始化swiper

    var swiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,

        },
        autoplay: {
            disableOnInteraction: false,
        },
        loop: true,
    });

});