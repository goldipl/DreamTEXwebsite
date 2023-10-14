
const footer_year = document.querySelector('footer .footer_container_bottom-left span');

footer_year.innerHTML = new Date().getFullYear();

const footer_arrow_up = document.querySelector('footer .footer-arrow-up');

if (!!footer_arrow_up) {
    footer_arrow_up.addEventListener('click', () => window.scrollTo(0,0));
}

const messenger = document.querySelector('.messenger');
const messe_x_icon = document.querySelector('.messenger .messenger-x-icon');

messe_x_icon.addEventListener('click', () => messenger.style.display = "none");

const hamburger = document.querySelector('#mobile-nav .mobile-nav-container .mobile-nav-container-slot.hamburger .hamburger-container');
const mobile_nav_menu = document.querySelector('#mobile-nav .mobile-nav-menu-items');
const menu_hover = document.querySelector('body .menu-hover');

hamburger.addEventListener('click', () => {
    mobile_nav_menu.classList.toggle('open');
    hamburger.classList.toggle('active');
    menu_hover.classList.toggle('active');
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
        menu_hover.classList.toggle('active');
    });
});

const mobile_nav_back_icon = document.querySelector('#mobile-nav .mobile-nav-sublist-title .mobile-back-icon');

mobile_nav_back_icon.addEventListener('click', () => {
    mobile_nav_back_icon.parentElement.parentElement.classList.toggle('active');
});

const desktop_nav_main_items = document.querySelectorAll('#nav .bottom-nav .bottom-nav-container .left-bottom-nav ul.bottom-nav-elements-container > li.bottom-nav-links');
const desktop_sublist_item = document.querySelectorAll('#nav .bottom-nav .bottom-nav-container .left-bottom-nav ul.bottom-nav-elements-container > li.bottom-nav-links .bottom-nav-sublist ul.sublist-items > li.sublist-item p');

for (let i = 0; i < desktop_nav_main_items.length; i++) {
    desktop_nav_main_items[i].addEventListener("click", changeMenuElement);
}

function changeMenuElement(e) {
  const oldActive = document.querySelectorAll("#nav .bottom-nav .bottom-nav-container .left-bottom-nav ul.bottom-nav-elements-container li.bottom-nav-links.active");
  const hasActiveClass = e.target.classList.contains('active');
    for (let i = 0; i < oldActive.length; i++) {
        oldActive[i].classList.remove("active");
        menu_hover.classList.remove('active');
    }
    if (hasActiveClass) {
        e.target.classList.remove("active");
        menu_hover.classList.remove('active');
    } else {
        e.target.classList.add("active");
        menu_hover.classList.add('active');
    }
}

const mobile_sublist_item = document.querySelectorAll('#mobile-nav .mobile-nav-menu-items .mobile-nav-list .mobile-nav-list-items-icons .mobile-nav-list-item-icon .mobile-nav-sublist .mobile-nav-sublist-items-icon .mobile-nav-list-item-icon p');

mobile_sublist_item.forEach(e => {
    e.addEventListener('click', () => {
        e.nextElementSibling.classList.toggle('active');
        e.parentElement.parentElement.parentElement.parentElement.classList.toggle('active');
    });
});

const mobile_nav_sublist_back_icon = document.querySelector('#mobile-nav .mobile-nav-menu-items .mobile-nav-list .mobile-nav-list-items-icons .mobile-nav-list-item-icon .mobile-nav-sublist .mobile-nav-sublist-items-icon .mobile-nav-list-item-icon .mobile-nav-subsublist-items .mobile-back-icon');

mobile_nav_sublist_back_icon.addEventListener('click', () => {
    mobile_nav_sublist_back_icon.parentElement.classList.toggle('active');
});

const product_arrows = document.querySelectorAll('.products-slot .products-slot-top-container .products-slot-desc .products-slot-desc-bottom .products-slot-arrows-down');

product_arrows.forEach(e => {
    e.addEventListener('click', () => {
        e.parentElement.parentElement.parentElement.nextElementSibling.classList.toggle('show');
        e.parentElement.classList.toggle('active');
    });
});

const bestseller_product_arrows = document.querySelectorAll('#bestsellers .swiper-products .swiper-slide .product-swiper-container .product-swiper-top-container .product-swiper-desc .product-swiper-desc-bottom .product-swiper-arrows-down');

bestseller_product_arrows.forEach(e => {
    e.addEventListener('click', () => {
        e.parentElement.parentElement.parentElement.nextElementSibling.classList.toggle('show');
        e.parentElement.classList.toggle('active');
    });
});

menu_hover.addEventListener('click', () => {
    menu_hover.classList.remove('active');
    desktop_nav_main_items.forEach(e => {
        e.classList.remove('active');
    })
    mobile_nav_menu.classList.remove('open');
    hamburger.classList.remove('active');
    mobile_nav_list_item.forEach(e => {
        e.classList.remove('active');
    })
    mobile_sublist_item.forEach(e => {
        e.classList.remove('active');
    })
})

const clients_panel_desktop_icon = document.querySelector('#nav .top-nav .searchbar-right-container .logo-text-header-container a.logo-text-header-link.clients-panel-icon');

if (!!clients_panel_desktop_icon) {
    clients_panel_desktop_icon.addEventListener('click', () => {
        clients_panel_desktop_icon.nextElementSibling.classList.toggle('active');
        clients_panel_desktop_icon.classList.toggle('active');
    });
};

// Scroll up fixed header
let lastScrollPosition = window.scrollY; 

function addActiveClassOnScrollUp() {
  const currentScrollPosition = window.scrollY;
  const mobileMenuOn = document.querySelector('body .menu-hover');

  if (currentScrollPosition === 0) {
    document.querySelector('header').classList.remove('active');
  } else if ((currentScrollPosition < lastScrollPosition) && !mobileMenuOn.classList.contains('active')) {
    document.querySelector('header').classList.add('active');
  } else {
    document.querySelector('header').classList.remove('active');
  }
  lastScrollPosition = currentScrollPosition;
}

window.addEventListener('scroll', addActiveClassOnScrollUp);

// Add class 'long-page' to body to long webistes pages
function addClassIfWebsiteHeightExceedsWindow() {

    const websiteHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
  
    if (websiteHeight > windowHeight) {
      document.body.classList.add('long-page');
    } else {
      document.body.classList.remove('long-page');
    }
}
  
window.addEventListener('load', addClassIfWebsiteHeightExceedsWindow);
window.addEventListener('resize', addClassIfWebsiteHeightExceedsWindow);