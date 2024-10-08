import { createContext, useState, useEffect } from 'react';
import { addToCart as apiAddToCart, removeCartItem as apiRemoveCartItem, clearCart as apiClearCart, getAllCartItems as apiGetAllCartItems } from '../services/cart-api'; // Import API functions

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const items = await apiGetAllCartItems(); // Fetch cart items from API
        setCartItems(items); // Update state with fetched items
      } catch (error) {
        console.error('Error fetching cart items:', error.message);
      }
    };

    fetchCartItems(); // Call the fetch function
  }, []); // Empty dependency array to run only on mount

  const addToCart = async (item) => {
    try {
      const response = await apiAddToCart(item.id); // Call API to add item
      if (response) {
        const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);
        if (isItemInCart) {
          setCartItems(
            cartItems.map((cartItem) =>
              cartItem.id === item.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
            )
          );
        } else {
          setCartItems([...cartItems, { ...item, quantity: 1 }]);
        }
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  const removeFromCart = async (item) => {
    try {
      await apiRemoveCartItem(item.id); // Call API to remove item
      const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);
      if (isItemInCart.quantity === 1) {
        setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
      } else {
        setCartItems(
          cartItems.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity - 1 }
              : cartItem
          )
        );
      }
    } catch (error) {
      console.error('Error removing from cart:', error);
    }
  };

  const clearCart = async () => {
    try {
      await apiClearCart(); // Call API to clear cart
      setCartItems([]);
    } catch (error) {
      console.error('Error clearing cart:', error);
    }
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};