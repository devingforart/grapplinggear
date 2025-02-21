import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import productsData from './products.json';
import { Product } from '../types/product';

const ProductGrid: React.FC = () => {
  const products: Product[] = productsData.products;

  // Filtramos los productos para mostrar solo los que tienen landing: true
  const landingProducts = products.filter(product => product.landing === true);

  return (
    <motion.section 
      id="nuestra-coleccion"
      className="product-grid-creative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="collection-intro">
        <h2>Nuevos arribos</h2>
        <p>
          Descubre la fusión perfecta entre tecnología y pasión por el grappling.
        </p>
      </div>
      <div className="product-grid-creative__list">
        {landingProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </motion.section>
  );
};

export default ProductGrid;
