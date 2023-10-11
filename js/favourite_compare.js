const add_to_compare = document.querySelector('#products_cart .products_cart_container .product_description_container .products-description .description .add-to-compare');
const add_to_favourite = document.querySelector('#products_cart .products_cart_container .product_description_container .products-description .description .add-to-favorite');

add_to_compare.addEventListener('click', () => {
    add_to_compare.classList.toggle('active');
    if (add_to_compare.classList.contains('active')) {
        add_to_compare.innerHTML = 'usuń z porównania';
    } else {
        add_to_compare.innerHTML = 'dodaj do porównania';
    }
});

add_to_favourite.addEventListener('click', () => {
    add_to_favourite.classList.toggle('active');
    if (add_to_favourite.classList.contains('active')) {
        add_to_favourite.innerHTML = 'usuń z ulubionych';
    } else {
        add_to_favourite.innerHTML = 'dodaj do ulubionych';
    }
});

const add_to_compare_bottom = document.querySelectorAll('#products_cart .products_cart_products-slots .products_cart_products-slot .products_cart_products-slot-bottom-container .products_cart_products-slot-add-to-compare');
const add_to_favourite_bottom = document.querySelectorAll('#products_cart .products_cart_products-slots .products_cart_products-slot .products_cart_products-slot-bottom-container .products_cart_products-slot-add-to-favorite');

add_to_compare_bottom.forEach(e => e.addEventListener('click', () => {
    e.classList.toggle('active');
    if (e.classList.contains('active')) {
        e.innerHTML = 'usuń z porównania';
    } else {
        e.innerHTML = 'dodaj do porównania';
    }
}));

add_to_favourite_bottom.forEach(f => f.addEventListener('click', () => {
    f.classList.toggle('active');
    if (f.classList.contains('active')) {
        f.innerHTML = 'usuń z ulubionych';
    } else {
        f.innerHTML = 'dodaj do ulubionych';
    }
}));