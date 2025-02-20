// src/context/InventoryContext.tsx
import React, { createContext, useState, ReactNode } from 'react';
import productsData from '../components/products.json';

interface Inventory {
  [productId: number]: {
    [size: string]: number;
  }
}

interface InventoryContextType {
  inventory: Inventory;
  checkStock: (productId: number, size: string) => number;
  reduceStock: (productId: number, size: string, quantity: number) => boolean;
}

export const InventoryContext = createContext<InventoryContextType>({
  inventory: {},
  checkStock: () => 0,
  reduceStock: () => false,
});

export const InventoryProvider = ({ children }: { children: ReactNode }) => {
  const initialInventory: Inventory = {};
  productsData.products.forEach(product => {
    initialInventory[product.id] = product.stockBySize;
  });
  const [inventory, setInventory] = useState<Inventory>(initialInventory);

  const checkStock = (productId: number, size: string): number => {
    return inventory[productId] ? inventory[productId][size] || 0 : 0;
  };

  const reduceStock = (productId: number, size: string, quantity: number): boolean => {
    const currentStock = checkStock(productId, size);
    if (currentStock >= quantity) {
      setInventory(prev => ({
        ...prev,
        [productId]: {
          ...prev[productId],
          [size]: prev[productId][size] - quantity,
        },
      }));
      return true;
    }
    return false;
  };

  return (
    <InventoryContext.Provider value={{ inventory, checkStock, reduceStock }}>
      {children}
    </InventoryContext.Provider>
  );
};
