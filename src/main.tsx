import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux'; // Importa el Provider de Redux
import store from './store'; // Importa el store de Redux
import { CartProvider } from './context/CartContext'; // Contexto de Carrito
import { InventoryProvider } from './context/InventoryContext'; // Contexto de Inventario
import { NotificationProvider } from './context/NotificationContext'; // Contexto de Notificaciones
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
