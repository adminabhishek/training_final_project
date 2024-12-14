// Example cart functionality
let cart = [];

function updateCart() {
    const cartCount = document.querySelector('.cart a');
    cartCount.textContent = `🛒 Cart (${cart.length})`;
}

document.addEventListener('DOMContentLoaded', () => {
    // Handle add to cart
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = e.target.dataset.product;
            cart.push(productId);
            updateCart();
            alert('Item added to cart!');
        });
    });
});
