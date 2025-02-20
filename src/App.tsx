// src/App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Marketing from './pages/Marketing';
import ThemeToggle from './components/ThemeToggle';
import Header from './components/Header';
import NotificationContainer from './components/NotificationContainer';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <ThemeToggle />
      <NotificationContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/producto/:id" element={<ProductDetail />} />
        <Route path="/carrito" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/marketing" element={<Marketing />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
