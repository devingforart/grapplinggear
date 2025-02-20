// src/context/CartContext.tsx
import { createContext, useState, ReactNode } from 'react';
import { Product } from '../types/product';

export interface CartItem {
  product: Product;
  quantity: number;
  size: string;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (productId: number, size: string) => void;
  updateCartItem: (productId: number, size: string, newQuantity: number) => void;
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
      // Se busca si ya existe el mismo producto con el mismo talle
      const index = prevItems.findIndex(
        ci => ci.product.id === item.product.id && ci.size === item.size
      );
      if (index !== -1) {
        const newItems = [...prevItems];
        newItems[index].quantity += item.quantity;
        return newItems;
      }
      return [...prevItems, item];
    });
  };

  const removeFromCart = (productId: number, size: string) => {
    setCartItems(prevItems =>
      prevItems.filter(item => !(item.product.id === productId && item.size === size))
    );
  };

  const updateCartItem = (productId: number, size: string, newQuantity: number) => {
    setCartItems(prevItems =>
      prevItems.map(item => {
        if (item.product.id === productId && item.size === size) {
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
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateCartItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
