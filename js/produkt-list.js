(function () {

    const products = [
        {
            id: '1',
            title: 'Tenor Trombon',
            price: '$600',
            description1: 'Lorem ipsum.',
            description2: 'Lorem ipsum.',
            description3: 'Lorem ipsum dolor.',
            description4: 'Lorem ipsum.'
        },
        {
            id: '2',
            title: 'Bass Trombone',
            price: '$900',
            description1: 'Lorem ipsum.',
            description2: 'Lorem ipsum.',
            description3: 'Lorem ipsum dolor.',
            description4: 'Lorem ipsum.'

        },
        {
            id: '3',
            title: 'Valve Trombone',
            price: '$1200',
            description1: 'Plays similar to a Trumpet.',
            description2: 'Great for Jazz Bands.',
            description3: 'Lorem ipsum dolor.',
            description4: 'Lorem ipsum.'

        }
    ];

    function renderProducts(products) {
        const productList = document.querySelector('.main-products__list');
        productList.innerHTML = '';
        for (const product of products) {
            productList.innerHTML += `
            <div class="product-card">
                <div class="level">${product.title}</div>
                <h3>${product.price}</h3>
                <p>${product.description1}</p>
                <p>${product.description2}</p>
                <p>${product.description3}</p>
                <p>${product.description4}</p>
                <form class="level__form" action="#tenor">
                    <button class="button">Select</button>
                </form>
            </div>`;
        }
    }
    renderProducts(products);
})();