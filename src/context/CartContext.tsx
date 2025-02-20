// src/context/CartContext.tsx
import React, { createContext, useState, ReactNode } from 'react';
import { Product } from '../types/product';

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (productId: number) => void;
  updateCartItem: (productId: number, newQuantity: number) => void;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  updateCartItem: () => {},
  clearCart: () => {},
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCartItems(prevItems => {
      const index = prevItems.findIndex(ci => ci.product.id === item.product.id);
      if (index !== -1) {
        const newItems = [...prevItems];
        newItems[index].quantity += item.quantity;
        return newItems;
      }
      return [...prevItems, item];
    });
  };

  const removeFromCart = (productId: number) => {
    setCartItems(prevItems =>
      prevItems.filter(item => item.product.id !== productId)
    );
  };

  const updateCartItem = (productId: number, newQuantity: number) => {
    setCartItems(prevItems =>
      prevItems.map(item => {
        if (item.product.id === productId) {
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateCartItem, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
