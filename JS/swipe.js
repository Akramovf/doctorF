var swiper = new Swiper('.mySwiper', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 4,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    loop: true,
    modifier: 1,
    slideShadows: true,
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    hide: true,
  },
})
