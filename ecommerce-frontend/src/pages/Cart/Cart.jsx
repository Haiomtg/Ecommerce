import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../context/CartContext';

export default function Cart() {
  const { cartItems, removeFromCart, clearCart, getCartTotal, updateItemQuantity, checkoutCart, userAddress } = useContext(CartContext);
  const [paymentMethod, setPaymentMethod] = useState(''); // State for payment method
  const [address, setAddress] = useState({ street: '', city: '', state: '', zip: '' }); // State for address

  useEffect(() => {
    if (userAddress) {
      setAddress(userAddress); // Set address from user context if available
    }
  }, [userAddress]);

  const handleDecreaseQuantity = (item) => {
    if (item.quantity <= 1) {
      alert("Quantity cannot be less than 1. Please remove the item if you want to delete it.");
    } else {
      updateItemQuantity(item.id, item.quantity - 1);
    }
  };

  const handleCheckout = () => {
    if (!paymentMethod) {
      alert("Please select a payment method.");
      return;
    }
    checkoutCart(paymentMethod); // Call the checkout function
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Your Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id} className="card mb-3">
          <div className="card-body d-flex justify-content-between align-items-center">
            <div>
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">Price: ${item.price}</p>
              <p className="card-text">Quantity: {item.quantity}</p>
              <button className="btn btn-success" onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
              <button className="btn btn-danger" onClick={() => handleDecreaseQuantity(item)} disabled={item.quantity <= 1}>-</button>
            </div>
            <button className="btn btn-danger" onClick={() => removeFromCart(item)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="d-flex justify-content-between align-items-center">
        <h4>Total: ${getCartTotal()}</h4>
        <button className="btn btn-warning" onClick={clearCart}>Clear Cart</button>
      </div>
      <div className="mt-4">
        <h4>Select Payment Method:</h4>
        <select onChange={(e) => setPaymentMethod(e.target.value)} value={paymentMethod}>
          <option value="">Select a payment method</option>
          <option value="credit_card">Credit/Debit Card</option>
          <option value="paypal">PayPal</option>
          {/* Add more payment options as needed */}
        </select>
        <button className="btn btn-primary mt-2" onClick={handleCheckout}>Checkout</button>
      </div>
      <div className="mt-4">
        <h4>Address:</h4>
        <form>
          <div className="form-group">
            <label>Street:</label>
            <input
              type="text"
              className="form-control"
              value={address.street}
              onChange={(e) => setAddress({ ...address, street: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>City:</label>
            <input
              type="text"
              className="form-control"
              value={address.city}
              onChange={(e) => setAddress({ ...address, city: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>State:</label>
            <input
              type="text"
              className="form-control"
              value={address.state}
              onChange={(e) => setAddress({ ...address, state: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Zip Code:</label>
            <input
              type="text"
              className="form-control"
              value={address.zip}
              onChange={(e) => setAddress({ ...address, zip: e.target.value })}
            />
          </div>
        </form>
      </div>
    </div>
  );
}