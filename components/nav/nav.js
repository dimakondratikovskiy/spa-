import './../../utilits/index.js'
import {AddCatalog} from '../../components/catalog/catalog.js'
import Cart from './../cart/cart.js'
import Contacts from './../contacts/contacts.js'
import data from '../../api.js'

document.head.insertAdjacentHTML('beforeend', ' <link rel="stylesheet" href="./styles/style.css">')

let products = [];

data().then(result => {
    products = result;
    console.log(products)
})

const routes = [
    {name: 'home', component: AddCatalog}, 
    {name: 'cart', component: Cart},
    {name: 'contacts', component: Contacts}
]


const nav = document.createElement('nav')
nav.addTo('body')

routes.map(route => {
    const link = document.createElement('li')
    link.innerHTML = route.name
    link.addClass('my-link').addTo('nav').listener('click', () => {
        location.hash = route.name
        route.component(products)
    })
})

const iconCart = document.createElement('span')
iconCart.innerHTML = '<i class="icon-shopping-cart"></i>'
nav.appendChild(iconCart)

document.body.appendChild(nav)