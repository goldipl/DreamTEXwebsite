const bottom_nav_link = document.querySelectorAll('#nav .bottom-nav .bottom-nav-container .left-bottom-nav ul.bottom-nav-elements-container li.bottom-nav-links');

bottom_nav_link.forEach(e => {
    e.addEventListener('mouseover', () => {
        document.body.classList.add('menu-hover');
    });
    e.addEventListener('mouseout', () => {
        document.body.classList.remove('menu-hover');
    });
})

const footer_year = document.querySelector('footer .footer_container_bottom-left span');

footer_year.innerHTML = new Date().getFullYear();

const footer_arrow_up = document.querySelector('footer .footer-arrow-up');

footer_arrow_up.addEventListener('click', () => window.scrollTo(0,0))

const messenger = document.querySelector('.messenger');
const messe_x_icon = document.querySelector('.messenger .messenger-x-icon');

messe_x_icon.addEventListener('click', () => messenger.style.display = "none");