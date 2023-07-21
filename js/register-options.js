const register_delivery_square = document.querySelectorAll('#register .register_container .cart_square_container .cart_square_container-slot');
const nip_container = document.querySelector('#register .register_container .check_container');

register_delivery_square.forEach(e => e.addEventListener('click', () => {
    e.classList.toggle('checked');
    if (e.classList.contains('checked')) {
        nip_container.classList.add('active');
        if ((e.classList.contains('checked'))) {
            e.nextElementSibling.classList.remove('checked');
            e.previousElementSibling.classList.remove('checked');
        }
    } else {
        if (!(e.classList.contains('checked'))) {
             nip_container.classList.remove('active');
        }
    }
}));