import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from './data';

interface CartItem extends Product {
  quantity: number;
  selectedColor: string;
  selectedSize: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, color: string, size: string) => void;
  removeFromCart: (cartItemId: string) => void;
  clearCart: () => void;
  totalItems: number;
  totalPricePKR: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product, color: string, size: string) => {
    setCart(prev => {
      const cartItemId = `${product.id}-${color}-${size}`;
      const existing = prev.find(item => `${item.id}-${item.selectedColor}-${item.selectedSize}` === cartItemId);
      
      if (existing) {
        return prev.map(item => `${item.id}-${item.selectedColor}-${item.selectedSize}` === cartItemId 
          ? { ...item, quantity: item.quantity + 1 } 
          : item
        );
      }
      return [...prev, { ...product, quantity: 1, selectedColor: color, selectedSize: size }];
    });
  };

  const removeFromCart = (cartItemId: string) => {
    setCart(prev => prev.filter(item => `${item.id}-${item.selectedColor}-${item.selectedSize}` !== cartItemId));
  };

  const clearCart = () => setCart([]);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPricePKR = cart.reduce((acc, item) => {
    const priceNum = parseInt(item.price.replace('Rs. ', '').replace(/,/g, ''));
    return acc + (priceNum * item.quantity);
  }, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, totalItems, totalPricePKR }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};
