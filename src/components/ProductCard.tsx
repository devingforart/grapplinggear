// src/components/ProductCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-card__image">
        <img src={product.images[0]} alt={product.name} />
      </div>
      <div className="product-card__content">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>${product.price}</p>
        <Link to={`/producto/${product.id}`}>Ver Detalle</Link>
      </div>
    </div>
  );
};

export default ProductCard;
