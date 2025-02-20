// src/components/Cart.tsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Cart: React.FC = () => {
  const { cartItems, removeFromCart, updateCartItem, clearCart } = useContext(CartContext);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const handleQuantityChange = (productId: number, newQuantity: number) => {
    // Si la cantidad es menor a 1 se elimina el producto del carrito
    if (newQuantity < 1) {
      removeFromCart(productId);
    } else {
      updateCartItem(productId, newQuantity);
    }
  };

  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <div className="cart__content">
          <div className="cart__items">
            {cartItems.map(item => (
              <div className="cart__item" key={item.product.id}>
                <img
                  src={item.product.images[0]}
                  alt={item.product.name}
                  className="cart__item-image"
                />
                <div className="cart__item-info">
                  <h3>{item.product.name}</h3>
                  <p>Precio: ${item.product.price}</p>
                  <div>
                    <label htmlFor={`quantity-${item.product.id}`}>
                      Cantidad:
                    </label>
                    <input
                      id={`quantity-${item.product.id}`}
                      type="number"
                      value={item.quantity}
                      min="1"
                      onChange={(e) =>
                        handleQuantityChange(
                          item.product.id,
                          parseInt(e.target.value)
                        )
                      }
                      style={{ width: '60px', marginRight: '1rem' }}
                    />
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="btn"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="cart__summary">
            <h3>Resumen</h3>
            <p>Subtotal: ${subtotal}</p>
            <div style={{ marginBottom: '1rem' }}>
              <button
                onClick={clearCart}
                className="btn"
                style={{ backgroundColor: 'red', color: '#fff' }}
              >
                Vaciar Carrito
              </button>
            </div>
            <Link to="/checkout" className="btn">
              Proceder al Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
