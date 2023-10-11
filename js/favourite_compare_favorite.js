const add_to_compare = document.querySelectorAll('.products-slot .products-slot-top-container .products-slot-desc .products-slot-desc-top .products-slot-add-to-compare');
const add_to_favourite = document.querySelectorAll('.products-slot .products-slot-top-container .products-slot-desc .products-slot-desc-top .products-slot-add-to-favorite');

add_to_compare.forEach(e => e.addEventListener('click', () => {
    e.classList.toggle('active');
    if (e.classList.contains('active')) {
        e.innerHTML = 'usuń z porównania';
    } else {
        e.innerHTML = 'dodaj do porównania';
    }
}));

add_to_favourite.forEach(f => f.addEventListener('click', () => {
    f.classList.toggle('active');
    if (f.classList.contains('active')) {
        f.innerHTML = 'usuń z ulubionych';
    } else {
        f.innerHTML = 'dodaj do ulubionych';
    }
}));