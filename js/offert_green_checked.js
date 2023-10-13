const image_slot_img = document.querySelectorAll('#offert .offert_container .offert_table_container #tab-contents .tab-contents .products-list-table .products-list_container-slots .product-title-img img');

image_slot_img.forEach(e => e.addEventListener('click', () => {
    e.parentElement.classList.toggle('green-checked');
}));