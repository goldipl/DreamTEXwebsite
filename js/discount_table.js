const discount_table = document.getElementById('discount_table');
const transparent_background = document.getElementById('products_cart');
const button = document.querySelector('#products_cart .products_cart_container .product_description_container .products-price .price .calculate');
const close_button = document.querySelector('#products_cart #discount_table .discount_table_container .close-icon');

button.addEventListener('click', () => {
    discount_table.classList.add('active');
    transparent_background.classList.add('show_discount_table');
});

close_button.addEventListener('click', () => {
    discount_table.classList.remove('active');
    transparent_background.classList.remove('show_discount_table'); 
});