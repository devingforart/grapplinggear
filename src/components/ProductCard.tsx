// src/components/ProductCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types/product';
import ZoomImage from './ZoomImage';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-card__image">
        {/* Ajustamos la imagen con dimensiones moderadas */}
        <ZoomImage src={product.images[0]} alt={product.name} width={280} height={160} zoomLevel={2} />
      </div>
      <div className="product-card__info">
        <h3>{product.name}</h3>
        <p>{product.description.substring(0, 70)}...</p>
        <p className="price">${product.price}</p>
        <Link to={`/producto/${product.id}`} className="btn">
          Ver Detalle
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
