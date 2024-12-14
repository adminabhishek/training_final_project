let cart = [];
// Function to handle adding a card to the cart
function addToCart(button) {
    // Get the card price from the data-price attribute
    const card = button.closest('.card');
    const price = parseFloat(card.getAttribute('data-price'));
    
    // Add the price to the cart array
    cart.push(price);
    
    // Disable the "Add to Cart" button after clicking
    button.disabled = true;
    button.textContent = 'Added to Cart';
}

// Function to disable the "Prize" button
function disablePrizeButton() {
    const prizeButton = document.getElementById('prizeButton');
    prizeButton.disabled = true;
}

// Function to calculate and display the total price of all items in the cart
function calculateTotal() {
    if (cart.length === 0) {
        document.getElementById('totalAmount').textContent = 'Your cart is empty!';
        return;
    }

    // Sum the prices in the cart
    const total = cart.reduce((sum, price) => sum + price, 0);
    
    // Display the total amount
    document.getElementById('totalAmount').textContent = `Total: ₹${total.toFixed(2)}`;
}
