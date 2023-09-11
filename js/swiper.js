
function initSwiper(containerName) {
    return new Swiper(containerName, {

        // Стандартное положение
        direction: 'horizontal',
        loop: true,

        // Если нужен скроллБар (пока скрыт hide: true)
        progressbar: {
            el: '.swiper-progressbar',
            hide: true,
        },

        // Кнопки перелистывания
        navigation: {
            nextEl: '.button-next',
            prevEl: '.button-prev',
        },
    });
}

export default initSwiper;