// src/components/Header.tsx
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import '../scss/components/_header.scss';

const Header: React.FC = () => {
  const { cartItems } = useContext(CartContext);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);

  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">Grappling Gear</Link>
      </div>

      {/* Menú para pantallas de escritorio */}
      <nav className="header__nav desktop">
        <Link to="/productos">Productos</Link>
        <Link to="/contactanos">Contáctanos</Link>
        <Link to="/carrito" className="header__cart">
          Carrito
          {totalItems > 0 && (
            <span className="header__cart-badge">{totalItems}</span>
          )}
        </Link>
      </nav>

      {/* Botón menú hamburguesa para tablet y móvil */}
      <div className="header__mobile-menu">
        <button 
          onClick={toggleMobileMenu} 
          className="mobile-menu__toggle" 
          aria-label="Abrir menú de navegación"
        >
          <span className="mobile-menu__bar"></span>
          <span className="mobile-menu__bar"></span>
          <span className="mobile-menu__bar"></span>
        </button>
      </div>

      {/* Overlay del menú móvil */}
      {isMobileMenuOpen && (
        <div className="mobile-menu__overlay" onClick={toggleMobileMenu}>
          <div 
            className="mobile-menu__content" 
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="mobile-menu__close" 
              onClick={toggleMobileMenu} 
              aria-label="Cerrar menú de navegación"
            >
              &times;
            </button>
            <nav className="mobile-menu__nav">
              <Link to="/productos" onClick={toggleMobileMenu}>Productos</Link>
              <Link to="/contactanos" onClick={toggleMobileMenu}>Contáctanos</Link>
              <Link to="/carrito" onClick={toggleMobileMenu} className="mobile-cart">
                Carrito
                {totalItems > 0 && (
                  <span className="header__cart-badge">{totalItems}</span>
                )}
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
