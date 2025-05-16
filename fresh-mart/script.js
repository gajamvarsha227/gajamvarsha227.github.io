
const products = [
    { id: 1, name: 'Organic Apples', price: 2.99, image: 'file:///C:/Users/Hp/Downloads/Images/apple.jpg' },
    { id: 2, name: 'Fresh Bananas', price: 1.99, image: 'file:///C:/Users/Hp/Downloads/Images/banana.jpeg' },
    { id: 3, name: 'Carrots', price: 0.99, image: 'file:///C:/Users/Hp/Downloads/Images/carrot.jpeg'},
    { id: 4, name: 'Organic Tomatoes', price: 3.49, image: 'file:///C:/Users/Hp/Downloads/Images/tamoto.jpg' },
    { id: 5, name: 'Spinach', price: 2.49, image: 'file:///C:/Users/Hp/Downloads/Images/spanish.jpeg'},
    { id: 6, name: 'Broccoli', price: 1.79, image: 'file:///C:/Users/Hp/Downloads/Images/broccoli.jpeg' },
];


let cart = [];
const cartCounter = document.querySelector('.cart-counter');
document.addEventListener('DOMContentLoaded', () => {
    const productsGrid = document.querySelector('.products-grid');
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <h3>${product.name}</h3>
            <p class="price">$${product.price.toFixed(2)}</p>
            <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsGrid.appendChild(productCard);
    });
});

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCartCounter();
}

function updateCartCounter() {
    cartCounter.textContent = cart.length;
}

function showCart() {
    alert(`Cart Items: ${cart.length}`);
}