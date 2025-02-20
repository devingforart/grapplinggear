// src/pages/Home.tsx
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div className="home">
      <Header />
      <Hero />
      <ProductGrid />
      <Footer />
    </div>
  );
};

export default Home;
