const swiper1 = new Swiper('.swiper1', {
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper1 .swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper1 .swiper-button-next',
    prevEl: '.swiper1 .swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper1 .swiper-scrollbar',
  },
});

const swiper2 = new Swiper('.swiper2', {
  direction: 'vertical',
  loop: true,
  pagination: {
    el: '.swiper2 .swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper2 .swiper-button-next',
    prevEl: '.swiper2 .swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper2 .swiper-scrollbar',
  },
});
