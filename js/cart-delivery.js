const delivery_square = document.querySelectorAll('#cart_delivery_payment .cart_delivery_payment_container .cart_delivery_payment_container-slot .cart_square_container:not(.payment-method) .cart_square-slot');
const courier_address = document.querySelector('#cart_delivery_payment .cart_delivery_payment_container .cart_delivery_payment_container-slot .courier_address_container');
const delivery_switch = document.querySelector('#cart_delivery_payment .cart_delivery_payment_container .cart_delivery_payment_container-slot .title-checkbox .checkbox-wrapper-64 .switch');
const input_switch = document.querySelector('#cart_delivery_payment .cart_delivery_payment_container .cart_delivery_payment_container-slot .title-checkbox .checkbox-wrapper-64 input')

delivery_switch.addEventListener('click', () => {
    if (input_switch.checked) {
        courier_address.classList.add('active');
    } else {
        courier_address.classList.remove('active');  
    }
});

delivery_square.forEach(e => e.addEventListener('click', () => {
    e.classList.toggle('checked');
    if (e.classList.contains('checked') && e.classList.contains('courier')) {
        if ((e.classList.contains('checked'))) {
            e.nextElementSibling.classList.remove('checked');
            e.previousElementSibling.classList.remove('checked');
        }
    } else {
        if ((e.classList.contains('checked'))) {
            e.previousElementSibling.classList.remove('checked');
        }
    }
}));

const delivery_sq = document.querySelectorAll('#cart_delivery_payment .cart_delivery_payment_container .cart_delivery_payment_container-slot .cart_square_container.payment-method .cart_square-slot');

delivery_sq.forEach(e => e.addEventListener('click', () => {
    e.classList.toggle('checked');
    if (e.classList.contains('checked') && e.classList.contains('courier')) {
        if ((e.classList.contains('checked'))) {
            e.nextElementSibling.classList.remove('checked');
            e.previousElementSibling.classList.remove('checked');
        }
    } else {
        if ((e.classList.contains('checked'))) {
            e.previousElementSibling.classList.remove('checked');
        }
    }
}));