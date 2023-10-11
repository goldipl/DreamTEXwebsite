const add_to_compare = document.querySelectorAll('#bestsellers .swiper-products .swiper-slide .product-swiper-container .product-swiper-top-container .product-swiper-desc .product-swiper-desc-top .product-swiper-add-to-compare');
const add_to_favourite = document.querySelectorAll('#bestsellers .swiper-products .swiper-slide .product-swiper-container .product-swiper-top-container .product-swiper-desc .product-swiper-desc-top .product-swiper-add-to-favorite');

add_to_compare.forEach(e => e.addEventListener('click', () => {
    e.classList.toggle('active');
    if (e.classList.contains('active')) {
        e.innerHTML = 'usuń z porównania';
    } else {
        e.innerHTML = 'dodaj do porównania';
    }
}));

add_to_favourite.forEach(f => f.addEventListener('click', () => {
    f.classList.toggle('active');
    if (f.classList.contains('active')) {
        f.innerHTML = 'usuń z ulubionych';
    } else {
        f.innerHTML = 'dodaj do ulubionych';
    }
}));