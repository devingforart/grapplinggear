// src/components/Hero.tsx
import React from 'react';
import '../scss/components/_hero.scss';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero__banner">
        <div className="hero__content">
          <a href="/productos" className="btn">Explora la colección</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
