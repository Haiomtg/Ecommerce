import React, { useState, useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { CartProvider } from '../../context/CartContext';
import { getAllProducts } from '../../services/product-api';

export default function ProductList() {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 15;

    useEffect(() => {
        const fetchProducts = async () => {
            const products = await getAllProducts();
            setProducts(products);
        };
        fetchProducts();
    }, []);

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    return (
        <CartProvider>
            <div>
                <div className='row pb-4'>
                    <input
                        type="text"
                    placeholder="Search products..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className='col-12 border border-gray-300 rounded-md p-2'
                    />
                </div>
                <div className="product-list row">
                    {currentProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
                <div className="pagination d-flex justify-content-center gap-2 mt-4">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentPage(index + 1)}
                            className={ currentPage === index + 1 ? 'btn btn-primary px-4 py-2' : 'btn btn-secondary px-4 py-2'}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
        </CartProvider>
    );
}