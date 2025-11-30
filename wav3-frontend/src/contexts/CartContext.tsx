import React, { createContext, useContext, useState } from 'react';
import { Item } from '../types';

interface CartItem extends Item {
  qty: number;
  size: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: Item, size: string) => void;
  removeFromCart: (itemId: string) => void;
  total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: Item, size: string) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id && i.size === size);
      if (existing) {
        return prev.map(i => i.id === item.id && i.size === size ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, { ...item, qty: 1, size }];
    });
  };

  const removeFromCart = (itemId: string) => {
    setCart(prev => prev.filter(i => i.id !== itemId));
  };

  const total = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, total }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
};
