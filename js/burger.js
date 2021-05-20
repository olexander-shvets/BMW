window.addEventListener('DOMContentLoaded', () => {
    const menuElement = document.querySelector('.menu'),
        humburgerElement = document.querySelector('.humburger-menu');
    
    const toggleMenu = () => {
        menuElement.classList.toggle('menu-active');
        humburgerElement.classList.toggle('humburger-menu-active');
    };

    humburgerElement.addEventListener('click', toggleMenu);

    
});