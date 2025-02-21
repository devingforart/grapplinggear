// src/pages/Home.tsx
import React from 'react';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import Footer from '../components/Footer';
import productsData from '../components/products.json'; // Importar los productos

const Home: React.FC = () => {
  // Filtrar los productos nuevos
  const newProducts = productsData.products.filter(product => product.landing);

  // Extraer solo las imágenes para el carrusel
  const newProductImages = newProducts.flatMap(product => product.images[0]);

  return (
    <div className="home">
      <Hero images={newProductImages} />
      <ProductGrid />
      <Footer />
    </div>
  );
};

export default Home;
