import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ThemeToggle from './components/ThemeToggle';
import NotificationContainer from './components/NotificationContainer';

// Carga perezosa de componentes
const Home = lazy(() => import('./pages/Home'));
const ProductsAdvanced = lazy(() => import('./pages/ProductsAdvanced'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const Cart = lazy(() => import('./components/Cart'));
const Checkout = lazy(() => import('./components/Checkout'));
const Contactanos = lazy(() => import('./pages/Contactanos'));

const App: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
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
    </Suspense>
  );
};

export default App;
