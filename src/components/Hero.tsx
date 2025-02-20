// src/components/Hero.tsx
import React from 'react';
import ImageCarousel from './ImageCarousel';
import '../scss/components/_hero.scss';

interface HeroProps {
  images: string[];
}

const Hero: React.FC<HeroProps> = ({ images }) => {
  return (
    <section className="hero">
      <div className="hero__background">
        <ImageCarousel images={images} />
      </div>
      <div className="hero__content">
        <h1 className="hero__title">Descubre la Innovación en Grappling</h1>
        <p className="hero__subtitle">Equipamiento premium para el guerrero moderno</p>
        <a href="#nuestra-coleccion" className="hero__cta">Explora ahora</a>
      </div>
    </section>
  );
};

export default Hero;
