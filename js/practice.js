// IIFE
(function () {

    
    function getRandomMessage() {
        const messages = [
            'DRUNK IN NEW YORK',
            'GET DRUNK AND SIGN',
            'GET DRUNK AND FRAME CHICKS',
            'DANCE AND DRINK'
        ];
        return messages[Math.floor(Math.random() * messages.length)];
    }

    const headerH1 = document.querySelector('.header-banner__h1');
    setInterval( () => headerH1.innerText = getRandomMessage(), 3000);
})();