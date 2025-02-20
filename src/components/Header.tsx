// src/components/Header.tsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import '../scss/components/_header.scss';

const Header: React.FC = () => {
  const { cartItems } = useContext(CartContext);
  // Calcula el total de items sumando las cantidades
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">Grappling Gear</Link>
      </div>
      <nav className="header__nav">
        <Link to="/productos">Productos</Link>
        <Link to="/marketing">Marketing</Link>
        <Link to="/carrito" className="header__cart">
          Carrito
          {totalItems > 0 && (
            <span className="header__cart-badge">{totalItems}</span>
          )}
        </Link>
      </nav>
    </header>
  );
};

export default Header;
