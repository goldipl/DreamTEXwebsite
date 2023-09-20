const image_slot = document.querySelectorAll('#offert .offert_container .offert_table_container #tab-contents .tab-contents .products-list-table .products-list_container-slots .product-title-img');

image_slot.forEach(e => e.addEventListener('click', () => {
    e.classList.toggle('green-checked');
}));