(function () {

    const slides = [
        '<div><img class="our-brewery-carousel-item" src="img/dudes.png" alt="Dudes"></div>',
        '<div><img class="our-brewery-carousel-item" src="img/barrels.png" alt="Barrels"></div>',
        '<div><img class="our-brewery-carousel-item" src="img/bottling line.png" alt="Bottling line"></div>',
        '<div><img class="our-brewery-carousel-item" src="img/dude with a barrel.png" alt="Dude with a barrel"></div>',
        '<div><img class="our-brewery-carousel-item" src="img/brewing beer.png" alt="Brewing beer"></div>',
        '<div><img class="our-brewery-carousel-item" src="img/bottles.png" alt="Bottles"></div>'
    ];

    let currentSlideIdx = 0;

    function renderSlides() {
        const slideContainer = document.querySelector('.our-brewery-carousel__slide-container');
        slideContainer.innerHTML = slides[currentSlideIdx];
        if (window.innerWidth >= 768) {
            const secondSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
            slideContainer.innerHTML += slides[secondSlideIdx];
            if (window.innerWidth > 900) {
                const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
                slideContainer.innerHTML += slides[thirdSlideIdx];
                const renderedSlides = document.querySelectorAll('.our-brewery-carousel__slide-container > div');
                renderedSlides[1].classList.add('.our-brewery-carousel__slide-container--second');
            }
        }
    }
    function nextSlide() {
        currentSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
        renderSlides();
    }
    // setInterval(nextSlide, 3000);

    renderSlides();

    const btnNext = document.querySelector('.our-brewery-carousel__btn-next');
    btnNext.addEventListener('click', nextSlide);

    const btnPrev = document.querySelector('.our-brewery-carousel__btn-prev');
    btnPrev.addEventListener('click', nextSlide);

    window.addEventListener('resize', renderSlides);

})();
/*(function () {
    const slides = [
        '<div class="carousel-about"><img class="svg__about-us" src="img/soil_for_plants.svg" alt="Soil for Plants"><div class="about-us__carousel__title"><p class="soil-for-plants">Soil for Plants</p></div><div><p class="about-us__carousel__info">Its not easy to find quality soil in New York. We offer the best options for your plants. The soil we sell is decontaminated and enriched with nutrients.</p><a href="#contact-us"><p class="learn-more">LEARN MORE</p></a></div></div>',
        '<div class="carousel-about"><img class="svg__about-us" src="img/for_home.svg" alt="Plants for Home"><div class="about-us__carousel__title"><p class="plants-for-home">Plants for Home</p></div><div class="about-us__carousel__info"><p class="info__plants-home">We offer a huge selection of flowers and evergreens that will be a joy to see for many years. A charming plant will be a great addition to the interior.</p><a href="#contact-us"> <p class="learn-more">LEARN MORE</p> </a></div></div>',
        '<div class="carousel-about"><img class="svg__about-us" src="img/consultations.svg" alt="Consultations"><div class="about-us__carousel__title"><p class="consultations">Consultations</p></div><div class="about-us__carousel__info"><p class="info__consultations">We not only sell plants and everything related to them but are also ready to answer any of your questions! Contact us to select the best plant!</p><a href="#contact-us"><p class="learn-more">LEARN MORE</p></a></div></div>',
        '<div class="carousel-about"><img class="svg__about-us" src="img/flowerpots.svg" alt="Sale of Flowerpots"><div class="about-us__carousel__title"> <p class="sale-of">Sale of Flowerpots</p></div><div class="about-us__carousel__info"><p class="info__sale">Purchase flowerpots for plants of any type, from small flowers to huge palm trees. Our store offers only quality flowerpots from trusted manufacturers.</p> <a href="#contact-us"><p class="learn-more">LEARN MORE</p></a></div></div>',
        '<div class="carousel-about"><img class="svg__about-us" src="img/plant_food.svg" alt="Plant Food"><div class="about-us__carousel__title"><p class="plant-food">Plant Food</p></div><div class="about-us__carousel__info"><p class="info__plant-food">We offer everything you need to care for plants. Here you ll find a wide selection of fertilizers and medicinal products to combat flower diseases.</p><a href="#contact-us"><p class="learn-more">LEARN MORE</p></div></div>',
        '<div class="carousel-about"><img class="svg__about-us" src="img/garden.svg" alt="Plants for Garden"><div class="about-us__carousel__title"><p class="plants-garden">Plants for Garden</p></div><div class="about-us__carousel__info"><p class="info__plants-garden">Turn your yard into a colorful lawn! Here you will find dozens of varieties of flowers, both in the form of seeds, and already sprouted.</p><a href="#contact-us"><p class="learn-more">LEARN MORE</p></a></div></div>'
     ];
     let currentSlideIndx = 0;
     function renderSlide() {
        const slideContainer = document.querySelector('.about-us__carousel-container');
        slideContainer.innerHTML = slides[currentSlideIndx];
        if (window.innerWidth > 768) {
           const secondSlideInd = currentSlideIndx + 1 >= slides.length ? 0 : currentSlideIndx + 1;
           slideContainer.innerHTML += slides[secondSlideInd];
           if (window.innerWidth > 992) {
              const thirdSlideInd = secondSlideInd + 1 >= slides.length ? 0 : secondSlideInd + 1;
              const fourthSlideInd = thirdSlideInd + 1 >= slides.length ? 0 : thirdSlideInd + 1;
              slideContainer.innerHTML += slides[thirdSlideInd] + slides[fourthSlideInd];
           }
        }
     }
     function nextSlide() {
        currentSlideIndx = currentSlideIndx + 1 >= slides.length ? 0 : currentSlideIndx + 1;
        renderSlide();
     }
     function prevSlide() {
        currentSlideIndx = currentSlideIndx - 1 < 0 ? slides.length - 1 : currentSlideIndx - 1;
        renderSlide();
     }
     setInterval(nextSlide, 3000);
     renderSlide();
     const nextBtn = document.querySelector('.about-us__carousel-next');
     nextBtn.addEventListener('click', nextSlide);
  
     const prevBtn = document.querySelector('.about-us__carousel-prev');
     prevBtn.addEventListener('click', prevSlide);
  
     window.addEventListener('resize', renderSlide)
  })();
  var 2
  (function () {
  const slides = [
    '<div class="slide"><img src="img/blog/adidas.svg" alt="adidas" class="brands-carousel__img"></div>',
    '<div class="slide"><img src="img/blog/asics.svg" alt="asics" class="brands-carousel__img"></div>',
    '<div class="slide"><img src="img/blog/new-balance.svg" alt="new-balance" class="brands-carousel__img"></div>',
    '<div class="slide"><img src="img/blog/nike.svg" alt="nike" class="brands-carousel__img"></div>',
    '<div class="slide"><img src="img/blog/reebok.svg" alt="reebok" class="brands-carousel__img"></div>',
  ];
  let currentSlideIndx = 0;
  function renderSlide() {
    const slideContainer = document.querySelector(".brands-carousel-container");
    slideContainer.innerHTML = slides[currentSlideIndx];
    if (window.innerWidth > 600) {
      const secondSlideInd =
        currentSlideIndx + 1 >= slides.length ? 0 : currentSlideIndx + 1;
      slideContainer.innerHTML += slides[secondSlideInd];

      if (window.innerWidth > 768) {
        const thirdSlideInd =
          secondSlideInd + 1 >= slides.length ? 0 : secondSlideInd + 1;
        slideContainer.innerHTML += slides[thirdSlideInd];

        if (window.innerWidth > 992) {
          const fourthSlideInd =
            thirdSlideInd + 1 >= slides.length ? 0 : thirdSlideInd + 1;
          slideContainer.innerHTML += slides[fourthSlideInd];
        }
      }
    }
  }
  function nextSlide() {
    currentSlideIndx =
      currentSlideIndx + 1 >= slides.length ? 0 : currentSlideIndx + 1;
    renderSlide();
  }
  function prevSlide() {
    currentSlideIndx =
      currentSlideIndx - 1 < 0 ? slides.length - 1 : currentSlideIndx - 1;
    renderSlide();
  }
  renderSlide();
  const nextBtn = document.querySelector(".brands-carousel-next");
  nextBtn.addEventListener("click", nextSlide);

  const prevBtn = document.querySelector(".brands-carousel-prev");
  prevBtn.addEventListener("click", prevSlide);

  window.addEventListener("resize", renderSlide);
})();

  */