// src/App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductsAdvanced from './pages/ProductsAdvanced';
import ProductDetail from './pages/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Contactanos from './pages/Contactanos'; // Importa el nuevo componente
import ThemeToggle from './components/ThemeToggle';
import Header from './components/Header';
import NotificationContainer from './components/NotificationContainer';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <ThemeToggle />
      <NotificationContainer />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<ProductsAdvanced />} />
          <Route path="/producto/:id" element={<ProductDetail />} />
          <Route path="/carrito" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contactanos" element={<Contactanos />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
