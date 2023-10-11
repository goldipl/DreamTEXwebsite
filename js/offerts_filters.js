const filters_btn = document.querySelector('#offerts .offerts_container .filter-show-btn');
const filters = document.querySelector('#offerts .offerts_container .offerts-filters');
const filters_arrow = document.querySelector('#offerts .offerts_container .filter-show-btn .arrow');

filters_btn.addEventListener('click', () => {
    filters.classList.toggle('active');
    filters_arrow.classList.toggle('rotate');
});