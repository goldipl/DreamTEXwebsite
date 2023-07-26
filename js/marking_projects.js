const load_projects_btn = document.querySelector('#products_cart .marking_table_container .marking_table_container-slot .cart_square_container .cart_square-slot.load');
const projects_table = document.querySelector('#marking_projects .marking_projects_container');
const close_btn = document.querySelector('#products_cart .marking_projects_container .close-icon');
const dark_projects_background = document.getElementById('products_cart');

load_projects_btn.addEventListener('click', (e) => {
    e.preventDefault();
    projects_table.classList.toggle('show');
    dark_projects_background.classList.toggle('show_dark_background');
});

close_btn.addEventListener('click', () => {
    projects_table.classList.toggle('show');
    dark_projects_background.classList.toggle('show_dark_background');
});