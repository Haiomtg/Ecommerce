import React, { useState, useEffect } from 'react'
import ProductCard from '../ProductCard/ProductCard';
import { CartProvider } from '../../context/CartContext';
import { getAllProducts } from '../../services/product-api';


export default function ProductList() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const products = await getAllProducts();
            console.log(products);
            setProducts(products);
        };
        fetchProducts();
    }, []);

    return (
        <CartProvider>
        <div className="product-list row">
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
        </CartProvider>
    )
}
