/* CSS */
.modal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 300px;
}

.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
}

.close:hover,
.close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}

form label {
    display: block;
    margin-bottom: 10px;
}

form input[type="text"],
form input[type="password"] {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
}

form button[type="submit"] {
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
}

form button[type="submit"]:hover {
    background-color: #45a049;
}

// script.js

const cartItemsContainer = document.getElementById('cart-items');
const cartItems = [];

function addToCart(name, price) {
    const item = { name, price };
    cartItems.push(item);
    renderCartItems();
}

function renderCartItems() {
    cartItemsContainer.innerHTML = '';
    cartItems.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.innerHTML = `${item.name} - ${item.price}`;
        cartItemsContainer.appendChild(cartItem);
    });
}

// Exemple d'utilisation
addToCart('Produit 1', 10.99);
addToCart('Produit 2', 19.99);

// script.js

const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItemsContainer = document.getElementById('cart-items');
const cartItems = [];

addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
});

function addToCart(event) {
    const button = event.target;
    const price = button.dataset.price;
    const name = button.dataset.name;

    const item = { name, price };
    cartItems.push(item);

    renderCartItems();
}

function renderCartItems() {
    cartItemsContainer.innerHTML = '';
    cartItems.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.innerHTML = `${item.name} - ${item.price}`;
        cartItemsContainer.appendChild(cartItem);
    });
}
