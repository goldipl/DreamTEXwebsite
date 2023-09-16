const color = document.querySelector('#products-catalog .products_catalog_container .filters_container .filters_column .slot .filters-colors .color.red');
const variants = document.querySelector('#products-catalog .products_catalog_container .filters_container .filters_column .accordion.variants');

color.addEventListener('click', () => {
    color.classList.toggle('active');
    variants.classList.toggle('show');
});

colors = document.querySelectorAll('#products-catalog .products_catalog_container .filters_container .filters_column .slot .filters-colors .color');

colors.forEach(e => e.addEventListener('click', () => {
    e.classList.toggle('active');
}))