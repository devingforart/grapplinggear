// src/components/ImageCarousel.tsx
import React, { useState } from 'react';

interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  if (!images || images.length === 0) {
    return <div className="image-carousel__empty">No hay imágenes disponibles</div>;
  }

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="image-carousel">
      <div className="image-carousel__wrapper">
        <img
          src={images[currentImageIndex]}
          alt={`Hero Image ${currentImageIndex + 1}`}
          className="image-carousel__image"
        />
      </div>
      <div className="image-carousel__controls">
        <button
          onClick={prevImage}
          className="image-carousel__button prev-button"
          aria-label="Previous Image"
        >
          &#8249;
        </button>
        <button
          onClick={nextImage}
          className="image-carousel__button next-button"
          aria-label="Next Image"
        >
          &#8250;
        </button>
      </div>
      <div className="image-carousel__indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
            onClick={() => setCurrentImageIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
