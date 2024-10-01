var swiper = new Swiper(".cafeSwiper", {
    loop: true,
    speed: 5000,
    breakpoints: {
        0: {
            slidesPerView: 1.1,
        },

        480: {
            slidesPerView: 1.1,
        },

        768: {
            slidesPerView: 2.5,
        },

        1024: {
            slidesPerView: 3.2,
        },
        1280: {
            slidesPerView: 3.4,
        },
    },
});


var swiper = new Swiper('.footerImgSwiper', {
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 3000, // Adjust the delay (in milliseconds) between slides
        disableOnInteraction: false, // Allows autoplay to continue after user interactions
    },
});
