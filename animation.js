document.addEventListener("DOMContentLoaded", function () {
    var animatedElement = document.querySelector('.animation');

    function checkScroll() {
        var windowHeight = window.innerHeight;
        var elementTop = animatedElement.getBoundingClientRect().top;

        if (elementTop < windowHeight) {
            animatedElement.classList.add('animate');
        } else {
            animatedElement.classList.remove('animate');
        }
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Проверка при загрузке страницы
});