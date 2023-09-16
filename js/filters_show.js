const filters_button = document.querySelector('#products-catalog .products_catalog_container .filters_container .filter-show-btn');
const filters_column = document.querySelector('#products-catalog .filters_column');
const filters_arrow = document.querySelector('#products-catalog .products_catalog_container .filters_container .filter-show-btn .arrow');

filters_button.addEventListener('click', () => {
    filters_column.classList.toggle('active');
    filters_arrow.classList.toggle('rotate');
});