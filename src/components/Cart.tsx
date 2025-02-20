// src/components/Cart.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Cart: React.FC = () => {
  // Datos de ejemplo (en una aplicación real estos datos vendrían de un estado global o API)
  const cartItems = [
    {
      id: 1,
      name: 'Gi Tradicional',
      price: 100,
      quantity: 1,
      image: '/pictures/ArtBoard/Artboard1Blackfront.webp'
    },
    {
      id: 2,
      name: 'No Gi Rashguard',
      price: 60,
      quantity: 2,
      image: '/pictures/ArtBoard/Artboard1WhitefrontWhite.webp'
    }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <div className="cart__content">
          <div className="cart__items">
            {cartItems.map(item => (
              <div className="cart__item" key={item.id}>
                <img src={item.image} alt={item.name} className="cart__item-image" />
                <div className="cart__item-info">
                  <h3>{item.name}</h3>
                  <p>Precio: ${item.price}</p>
                  <p>Cantidad: {item.quantity}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="cart__summary">
            <h3>Resumen</h3>
            <p>Subtotal: ${subtotal}</p>
            <Link to="/checkout" className="btn">Proceder al Checkout</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
