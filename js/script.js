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