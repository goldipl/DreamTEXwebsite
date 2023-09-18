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