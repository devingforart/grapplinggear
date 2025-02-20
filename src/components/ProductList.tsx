// src/components/ProductList.tsx
import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '../types/product';
import productsData from './products.json';

const ProductList: React.FC = () => {
  const products: Product[] = productsData.products;
  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
