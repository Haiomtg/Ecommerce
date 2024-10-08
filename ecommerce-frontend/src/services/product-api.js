// ecommerce-backend/api.js

const API_BASE_URL = 'http://localhost:3010/api/product'; // Adjust the URL as needed

// Function to get all products
async function getAllProducts() {
    const response = await fetch(`${API_BASE_URL}/all`);
    if (!response.ok) throw new Error('Failed to fetch products');
    return await response.json();
}

// Function to get a product by ID
async function getProductById(id) {
    const response = await fetch(`${API_BASE_URL}/${id}`);
    if (!response.ok) throw new Error('Product not found');
    return await response.json();
}

// Function to add a new product
async function addProduct(product) {
    const response = await fetch(`${API_BASE_URL}/add`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product),
    });
    if (!response.ok) throw new Error('Failed to add product');
    return await response.json();
}

// Function to update a product
async function updateProduct(id, product) {
    const response = await fetch(`${API_BASE_URL}/update/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product),
    });
    if (!response.ok) throw new Error('Failed to update product');
    return await response.json();
}

// Function to delete a product
async function deleteProduct(id) {
    const response = await fetch(`${API_BASE_URL}/delete/${id}`, {
        method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to delete product');
    return await response.json();
}

module.exports = {
    getAllProducts,
    getProductById,
    addProduct,
    updateProduct,
    deleteProduct,
};