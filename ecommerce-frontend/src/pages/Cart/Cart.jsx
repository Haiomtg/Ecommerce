import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export default function Cart() {
  const { cartItems, removeFromCart, clearCart, getCartTotal } = useContext(CartContext);
  console.log(cartItems);
  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id}>
          <span>{item.title}</span>
          <span>{item.price}</span>
          <span>Quantity: {item.quantity}</span>
          <button onClick={() => removeFromCart(item)}>Remove</button>
        </div>
      ))}
      <p>Total: ${getCartTotal()}</p>
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
}