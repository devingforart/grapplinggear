// src/components/Hero.tsx
import React from 'react';
import '../scss/components/_hero.scss';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero__background"></div>
      <div className="hero__overlay"></div>
      
      <div className="hero__container">
        <div className="hero__content">
          <h1>Innovación en Grappling</h1>
          <p>Equipamiento de alta calidad para el guerrero moderno</p>
          <a href="#nuestra-coleccion" className="hero__cta">
            Explora la colección
          </a>
        </div>
      </div>
      
      <div className="hero__scroll">
        <svg className="hero__scroll-arrow" viewBox="0 0 24 24">
          <path d="M12 16l-6-6h12z" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
