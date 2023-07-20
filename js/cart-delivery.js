const delivery_square = document.querySelectorAll('#cart_delivery_payment .cart_delivery_payment_container .cart_delivery_payment_container-slot .cart_square_container .cart_square-slot');
const courier_address = document.querySelector('#cart_delivery_payment .cart_delivery_payment_container .cart_delivery_payment_container-slot .courier_address_container');

delivery_square.forEach(e => e.addEventListener('click', () => {
    e.classList.toggle('checked');
    if (e.classList.contains('checked') && e.classList.contains('courier')) {
        courier_address.classList.add('active');
        if ((e.classList.contains('checked'))) {
            e.nextElementSibling.classList.remove('checked');
            e.previousElementSibling.classList.remove('checked');
        }
    } else {
        courier_address.classList.remove('active');
        if ((e.classList.contains('checked'))) {
            e.previousElementSibling.classList.remove('checked');
        }
    }
}));