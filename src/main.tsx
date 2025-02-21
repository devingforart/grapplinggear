import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import { CartProvider } from './context/CartContext';
import { InventoryProvider } from './context/InventoryContext';
import { NotificationProvider } from './context/NotificationContext';
import './scss/main.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}> {/* Proveedor de Redux */}
      <InventoryProvider> {/* Proveedor de Inventario */}
        <CartProvider> {/* Proveedor de Carrito */}
          <NotificationProvider> {/* Proveedor de Notificaciones */}
            <App />
          </NotificationProvider>
        </CartProvider>
      </InventoryProvider>
    </Provider>
  </React.StrictMode>
);
