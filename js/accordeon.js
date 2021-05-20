window.addEventListener('DOMContentLoaded', () => {
    const featureLinkElements = document.querySelectorAll('.feature__link'),
        featureSubElements = document.querySelectorAll('.feature-sub');
    
    for (let i = 0; i < featureLinkElements.length; i++) {
        featureLinkElements[i].addEventListener('click', () => {
            if (featureLinkElements[i].classList.contains('feature__link_active')) {
                featureSubElements[i].classList.add('hidden');
                featureLinkElements[i].classList.remove('feature__link_active');
            } else {
                featureSubElements.forEach((featureSubElement) => {
                    featureSubElement.classList.add('hidden');
                });
                featureLinkElements.forEach((featureLinkElement) => {
                    featureLinkElement.classList.remove('feature__link_active');
                });
                featureSubElements[i].classList.remove('hidden');
                featureLinkElements[i].classList.add('feature__link_active');
            }
        });
    };
});
