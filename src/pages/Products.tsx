// src/pages/Products.tsx
import React from 'react';
import ProductList from '../components/ProductList';

const Products: React.FC = () => {
  return (
    <div className="products">
      <h2>Productos</h2>
      <ProductList />
    </div>
  );
};

export default Products;
