// src/components/ProductGrid.tsx
import React from 'react';
import ProductCard from './ProductCard';
import '../scss/components/_product.scss';
import productsData from './products.json';
import { Product } from '../types/product';



const ProductGrid: React.FC = () => {

  const products: Product[] = productsData.products;

  return (
    <section className="product-grid">
      <h2>Nuestra Colección</h2>
      <div className="product-grid__list">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
