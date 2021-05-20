window.addEventListener('DOMContentLoaded', () => {
    const moreElement = document.querySelector('.more'),
        modalElement = document.querySelector('.modal');
    
    const openModal = () => {
        modalElement.classList.remove('hidden');
    };

    const closeModal = () => {
        modalElement.classList.add('hidden');
    };

    moreElement.addEventListener('click', openModal);
    modalElement.addEventListener('click', (event) => {
        const target = event.target;
        if (target.classList.contains('overlay') ||
            target.classList.contains('modal__close')) {
            closeModal()
        }
    });
});