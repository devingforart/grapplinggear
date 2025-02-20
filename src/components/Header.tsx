// src/components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/components/_header.scss';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">Grappling Gear</Link>
      </div>
      <nav className="header__nav">
        <Link to="/productos">Productos</Link>
        <Link to="/marketing">Marketing</Link>
        <Link to="/carrito">Carrito</Link>
      </nav>
    </header>
  );
};

export default Header;
