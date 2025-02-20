// Hero.tsx
import React from 'react';
import '../scss/components/_hero.scss';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero__banner">
 
        <div className="hero__content">
{/*           <h1>Grappling Gear</h1>
 */}          <a href="/productos" className="btn">Explora la colección</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
