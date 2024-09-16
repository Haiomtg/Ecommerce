import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export default function ProductCard({product}) {
    const { addToCart, cartItems } = useContext(CartContext);
    console.log(cartItems)
    // const {handleAddToCart} = (item) => {
    //     addToCart(item);
    // }

    return (
        <div className='col-4'>
            <div className="card">
                <img src={product.img} className="card-img-top" alt={product.title} />
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className='text-body-secondary text-start'>sold: 24</p>
                    <h3 className='text-danger'>{product.price} AUD</h3>
                    <button onClick={() => addToCart(product)} className="btn btn-primary">Buy Now</button>
                    <button onClick={() => addToCart(product)} className="btn btn-danger">
                        <i className="fa-solid fa-cart-shopping"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}
