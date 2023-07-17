
const footer_year = document.querySelector('footer .footer_container_bottom-left span');

footer_year.innerHTML = new Date().getFullYear();

const footer_arrow_up = document.querySelector('footer .footer-arrow-up');

footer_arrow_up.addEventListener('click', () => window.scrollTo(0,0))

const messenger = document.querySelector('.messenger');
const messe_x_icon = document.querySelector('.messenger .messenger-x-icon');

messe_x_icon.addEventListener('click', () => messenger.style.display = "none");

const hamburger = document.querySelector('#mobile-nav .mobile-nav-container .mobile-nav-container-slot.hamburger .hamburger-container');
const mobile_nav_menu = document.querySelector('#mobile-nav .mobile-nav-menu-items');

hamburger.addEventListener('click', () => {
    mobile_nav_menu.classList.toggle('open');
    hamburger.classList.toggle('active');
});

const mobile_nav_list_item = document.querySelectorAll('#mobile-nav .mobile-nav-menu-items .mobile-nav-list .mobile-nav-list-items-icons .mobile-nav-list-item-icon');

mobile_nav_list_item.forEach(e => {
    e.addEventListener('click', () => {
        e.classList.toggle('active');
    });
})

const mobile_nav_close_icon = document.querySelectorAll('#mobile-nav .mobile-nav-sublist-close-icon');

mobile_nav_close_icon.forEach(e => {
    e.addEventListener('click', () => {
        mobile_nav_menu.classList.toggle('open');
        hamburger.classList.toggle('active');
    });
});

const mobile_nav_back_icon = document.querySelector('#mobile-nav .mobile-nav-sublist-title .mobile-back-icon');

mobile_nav_back_icon.addEventListener('click', () => {
    mobile_nav_back_icon.parentElement.parentElement.classList.toggle('active');
})

const desktop_nav_main_items = document.querySelectorAll('#nav .bottom-nav .bottom-nav-container .left-bottom-nav ul.bottom-nav-elements-container li.bottom-nav-links');

desktop_nav_main_items.forEach(e => {
    e.addEventListener('click', () => {
        console.log('dupa')
        document.body.classList.toggle('menu-hover');
        e.classList.toggle('active');
        e.firstElementChild.firstElementChild.classList.toggle('active');
    });
});