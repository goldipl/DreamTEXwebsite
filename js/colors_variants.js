const color = document.querySelector('#products-catalog .products_catalog_container .filters_container .filters_column .slot .filters-colors .color.red');
const variants = document.querySelector('#products-catalog .products_catalog_container .filters_container .filters_column .accordion.variants');

color.addEventListener('click', () => {
    variants.classList.toggle('show');
});