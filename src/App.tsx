// src/App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './components/Cart';
import Marketing from './pages/Marketing';
import ThemeToggle from './components/ThemeToggle';
import Header from './components/Header'; // Se importa el Header para el navbar persistente

const App: React.FC = () => {
  return (
    <BrowserRouter>
      {/* Navbar siempre visible */}
      <Header />
      {/* Botón para cambiar el tema */}
      <ThemeToggle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/producto/:id" element={<ProductDetail />} />
        <Route path="/carrito" element={<Cart />} />
        <Route path="/marketing" element={<Marketing />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
