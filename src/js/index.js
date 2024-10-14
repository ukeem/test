
// Мобильная навигация
import mobileNav from './modules/mobile-nav.js';
mobileNav();

// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

// init Swiper:
const reviewsSlider = new Swiper('.reviews__slider', {
    slidesPerView: 1.2,
    spaceBetween: 24,
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
        draggable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2.2,
            spaceBetween: 24,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
    },
});