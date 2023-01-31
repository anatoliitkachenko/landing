(function () {

    function updateClock() {
        const clockContainer = document.querySelector('.header__clock');
        clockContainer.innerText = new Date().toLocaleTimeString('uk');
    }
    setInterval(updateClock, 1000);
})();