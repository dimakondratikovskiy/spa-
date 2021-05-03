export default function () {
    document.querySelector('.container') ? document.querySelector('.container').remove() : null;
    const contacts = document.createElement('section');
    contacts.innerHTML = '<h1> contacts </h1>'
    contacts.classList.add('container')
    document.body.appendChild(contacts)
}