window.addEventListener('DOMContentLoaded', () => {
    const menuElement = document.querySelector('.menu'),
        humburgerElement = document.querySelector('.humburger-menu');
    
    const toggleMenu = () => {
        menuElement.classList.toggle('menu-active');
        humburgerElement.classList.toggle('humburger-menu-active');
    };

    const closeMenu = () => {
        menuElement.classList.remove('menu-active');
        humburgerElement.classList.remove('humburger-menu-active');
    };

    humburgerElement.addEventListener('click', toggleMenu);

    menuElement.addEventListener('click', (event) => {
        if (event.target.classList.contains('menu-list__link')) {
            closeMenu();
        }
    });
});