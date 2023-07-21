const cart_product_arrows = document.querySelectorAll('#products_cart .products_cart_products-slots .products_cart_products-slot .products_cart_products-slot-top-container .products_cart_products-slot-desc .products_cart_products-slot-desc-bottom .products_cart_products-slot-arrows-down');

cart_product_arrows.forEach(e => {
    e.addEventListener('click', () => {
        e.parentElement.parentElement.parentElement.nextElementSibling.classList.toggle('show');
        e.parentElement.classList.toggle('active');
    });
});