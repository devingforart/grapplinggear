import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { motion } from 'framer-motion';

const Cart: React.FC = () => {
  const { cartItems, removeFromCart, updateCartItem, clearCart } = useContext(CartContext);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const handleQuantityChange = (productId: number, size: string, newQuantity: number) => {
    if (newQuantity < 1) {
      removeFromCart(productId, size);
    } else {
      updateCartItem(productId, size, newQuantity);
    }
  };

  // Función para formatear el precio con el signo de pesos y separadores de miles
  const formatPrice = (price: number) => {
    return `$${price.toLocaleString('es-AR')}`; // Utiliza 'es-AR' para formato con separadores de miles
  };

  return (
    <div className="cart">
      <motion.h2 
        className="cart__title"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        Carrito
      </motion.h2>

      {cartItems.length === 0 ? (
        <p className="cart__empty-message">No hay productos en el carrito.</p>
      ) : (
        <div className="cart__content">
          <div className="cart__items">
            {cartItems.map(item => (
              <div className="cart__item" key={`${item.product.id}-${item.size}`}>
                <img
                  src={item.product.images[0]}
                  alt={item.product.name}
                  className="cart__item-image"
                />
                <div className="cart__item-info">
                  <h3>{item.product.name}</h3>
                  <p>Talle: {item.size}</p>
                  <p>Precio: {formatPrice(item.product.price)}</p> {/* Usamos la función para formatear el precio */}
                  <div className="cart__quantity">
                    <input
                      type="number"
                      value={item.quantity}
                      min="1"
                      onChange={(e) =>
                        handleQuantityChange(
                          item.product.id,
                          item.size,
                          parseInt(e.target.value)
                        )
                      }
                    />
                    <button
                      onClick={() => removeFromCart(item.product.id, item.size)}
                      className="btn cart__remove-button"
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
            <p className="cart__subtotal">Subtotal: {formatPrice(subtotal)}</p> {/* Formateamos el subtotal */}
            <div className="cart__actions">
              <button
                onClick={clearCart}
                className="btn cart__clear-button"
              >
                Vaciar
              </button>
              <Link to="/checkout" className="btn cart__checkout-button">
                Checkout
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
