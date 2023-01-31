(function () {

    const slides = [
        '<div><img src="img/dudes.png" alt="Dudes"></div>',
        '<div><img src="img/barrels.png" alt="Barrels"></div>',
        '<div><img src="img/bottling line.png" alt="Bottling line"></div>',
        '<div><img src="img/dude with a barrel.png" alt="Dude with a barrel"></div>',
        '<div><img src="img/brewing beer.png" alt="Brewing beer"></div>',
        '<div><img src="img/bottles.png" alt="Bottles"></div>'
    ];

    let currentSlideIdx = 0;

    function renderSlides() {
        const slideContainer = document.querySelector('.carousel__slide-container');
        slideContainer.innerHTML = slides[currentSlideIdx];
        if (window.innerWidth >= 768) {
            const secondSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
            slideContainer.innerHTML += slides[secondSlideIdx];
            if (window.innerWidth > 900) {
                const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
            slideContainer.innerHTML += slides[thirdSlideIdx];
            }
        }
    }

    function nextSlide() {
        currentSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
        renderSlides();
    }
    // setInterval(nextSlide, 3000);

    renderSlides();

    const btnNext = document.querySelector('.carousel__btn-next');
    btnNext.addEventListener('click', nextSlide);

    const btnPrev = document.querySelector('.carousel__btn-prev');
    btnPrev.addEventListener('click', nextSlide);
    
    window.addEventListener('resize', renderSlides);

})();