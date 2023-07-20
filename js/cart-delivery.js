const delivery_square = document.querySelectorAll('#cart_delivery_payment .cart_delivery_payment_container .cart_delivery_payment_container-slot .cart_square_container .cart_square-slot');

delivery_square.forEach(e => e.addEventListener('click', () => {
    e.classList.toggle('checked');
}));