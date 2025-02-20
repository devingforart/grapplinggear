// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CartProvider } from './context/CartContext';
import { InventoryProvider } from './context/InventoryContext';
import './scss/main.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <InventoryProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </InventoryProvider>
  </React.StrictMode>
);
