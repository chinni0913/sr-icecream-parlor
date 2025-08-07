import { createContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const stored = localStorage.getItem('cart');
    return stored ? JSON.parse(stored) : [];
  });

  // Save to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    const existing = cartItems.find((i) => i.name === item.name);

    if (existing) {
      const updated = cartItems.map((i) =>
        i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
      );
      setCartItems(updated);
      toast.info(`${item.name} quantity updated`, { toastId: item.name });
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
      toast.success(`${item.name} added to cart`, { toastId: item.name });
    }
  };

  const removeFromCart = (item) => {
    setCartItems((prev) => prev.filter((i) => i.name !== item.name));
    toast.error(`${item.name} removed from cart`, { toastId: `remove-${item.name}` });
  };

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
