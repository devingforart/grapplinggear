import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types/product';

const ProductCard: React.FC<{ product: Product }> = memo(({ product }) => {
  const formatPrice = (price: number) => {
    return `$${price.toLocaleString('es-AR')}`;
  };

  return (
    <div className="product-card">
      <Link to={`/producto/${product.id}`} className="product-card__link">
        <div className="product-card__image-container">
          <img
            src={product.images[0]}
            alt={product.name}
            className="product-card__image"
            loading="lazy" // Optimización de carga perezosa
          />
          <div className="product-card__overlay">
            <span className="product-card__quick-view">Ver Detalle</span>
          </div>
        </div>
      </Link>
      <div className="product-card__info">
        <h3 className="product-card__title">{product.name}</h3>
        <p className="product-card__description">
          {product.description.substring(0, 70)}...
        </p>
        <div className="product-card__price">{formatPrice(product.price)}</div>
      </div>
    </div>
  );
});

export default ProductCard;
