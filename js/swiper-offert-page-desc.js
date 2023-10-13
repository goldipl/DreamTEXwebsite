const swiper_products = new Swiper('.swiper-desc-product', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });