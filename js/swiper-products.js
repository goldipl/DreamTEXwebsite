const swiper_products = new Swiper('.swiper-products', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2,
    slidesPerGroup: 2,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      // when window width is >= 960px
      960: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      // when window width is >= 200px
      200: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
    },
    
  
  });