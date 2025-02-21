import React, { useState, useEffect } from 'react';

interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  if (!images || images.length === 0) {
    return <div className="image-carousel__empty">No hay imágenes disponibles</div>;
  }

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Cambiar imagen cada 3 segundos
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId); // Limpiar intervalo al desmontar el componente
  }, [images.length]);

  return (
    <div className="image-carousel">
      <div className="image-carousel__wrapper">
        <img
          src={images[currentImageIndex]}
          alt={`Hero Image ${currentImageIndex + 1}`}
          className="image-carousel__image"
        />
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
