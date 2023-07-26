const marking_btn = document.querySelector('#products_cart .products_cart_container .btns_bottom_product .signing_btn a');
const marking_table = document.querySelector('#marking_table .marking_table_container');
const dark_background = document.getElementById('products_cart');

marking_btn.addEventListener('click', (e) => {
    e.preventDefault();
    marking_table.classList.toggle('show');
    dark_background.classList.add('show_marking_table');
});

const slot_create = document.querySelector('#products_cart .marking_table_container .marking_table_container-slot .cart_square_container .cart_square-slot.create');
const marking_container = document.querySelector('#products_cart .marking_table_container .marking_table_container-slot.marking-container');

slot_create.addEventListener('click', () => {
    marking_container.classList.toggle('show');
});

const slot_check = document.querySelectorAll('#products_cart .marking_table_container .marking_table_container-slot .cart_square_container .cart_square-slot');

slot_check.forEach(e => e.addEventListener('click', () => {
    e.classList.toggle('checked');
}))

const save_marking_table = document.querySelector('#products_cart .marking_table_container .marking_table_container-slot .marking_table-buttons .marking_table-button-right a');

save_marking_table.addEventListener('click', () => {
    marking_table.classList.toggle('show');
    dark_background.classList.remove('show_marking_table');
});