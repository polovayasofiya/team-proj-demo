
const swiper = new Swiper('.mySwiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,

    keyboard: {
      enabled: true,
    },
    navigation: {
      nextEl: '.btn-next',
      prevEl: '.btn-prev',
    },
  });