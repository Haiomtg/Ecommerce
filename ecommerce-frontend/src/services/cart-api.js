const API_BASE_URL = 'http://localhost:3010/api/cart'; // Adjust the URL as needed

// Function to get all cart items
async function getAllCartItems() {
    const response = await fetch(`${API_BASE_URL}/all`);
    if (!response.ok) throw new Error('Failed to fetch cart items');
    return await response.json();
}

// Function to add an item to the cart
async function addToCart(productId) {
    const response = await fetch(`${API_BASE_URL}/add-to-cart/${productId}`, {
        method: 'POST',
    });
    if (!response.ok) throw new Error('Failed to add item to cart');
    return await response.json();
}

// Function to update an item in the cart
async function updateCartItem(id, quantity) {
    const response = await fetch(`${API_BASE_URL}/update/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ quantity }),
    });
    if (!response.ok) throw new Error('Failed to update cart item');
    return await response.json();
}

// Function to remove an item from the cart
async function removeCartItem(id) {
    const response = await fetch(`${API_BASE_URL}/remove/${id}`, {
        method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to remove cart item');
    return await response.json();
}

// Function to clear all items in the cart
async function clearCart() {
    const response = await fetch(`${API_BASE_URL}/clear`, {
        method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to clear cart');
    return await response.json();
}

// Function to checkout
async function checkout(paymentMethod) {
    const response = await fetch(`${API_BASE_URL}/checkout`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ paymentMethod }),
    });
    if (!response.ok) throw new Error('Failed to checkout');
    return await response.json();
}

module.exports = {
    getAllCartItems,
    addToCart,
    updateCartItem, // Ensure this is included
    removeCartItem,
    clearCart,
    checkout,
};
