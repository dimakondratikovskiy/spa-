function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? JSON.parse(decodeURIComponent(matches[1])) : undefined;
}

export default function (products) {
    document.querySelector('.container') ? document.querySelector('.container').remove() : null;
    const cart = document.createElement('section');
    cart.innerHTML = '<h1> Cart </h1>'
    cart.classList.add('container')
    document.body.appendChild(cart)
    const productsInCart = getCookie('products')
    productsInCart.map(id => console.log(products[id+1]))
}