// src/components/FullZoomImage.tsx
import React, { useState, useRef, useEffect } from 'react';

interface FullZoomImageProps {
  src: string;
  alt?: string;
  thumbnailWidth?: number;  // Ancho del thumbnail (por defecto: 300px)
  thumbnailHeight?: number; // Alto del thumbnail (por defecto: 300px)
}

const FullZoomImage: React.FC<FullZoomImageProps> = ({
  src,
  alt = '',
  thumbnailWidth = 300,
  thumbnailHeight = 300,
}) => {
  const [hovered, setHovered] = useState(false);
  const [naturalSize, setNaturalSize] = useState<{ width: number; height: number }>({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Obtiene las dimensiones naturales de la imagen
  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setNaturalSize({ width: img.naturalWidth, height: img.naturalHeight });
    };
  }, [src]);

  return (
    <div
      className="full-zoom-image-container"
      ref={containerRef}
      style={{
        position: 'relative',
        width: `${thumbnailWidth}px`,
        height: `${thumbnailHeight}px`,
        overflow: 'visible', // Permite que el overlay se muestre fuera del contenedor
        cursor: 'zoom-in',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Imagen en tamaño reducido */}
      <img
        src={src}
        alt={alt}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
        }}
      />
      {/* Overlay que muestra la imagen en tamaño original */}
      {hovered && (
        <div
          className="full-zoom-overlay"
          style={{
            position: 'absolute',
            top: 0,
            left: '10%', // Se posiciona a la derecha del thumbnail
            zIndex: 999,
            border: '2px solid var(--accent-color)',
            backgroundColor: '#fff',
            boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
            maxWidth: '90vw',
            maxHeight: '90vh',
            overflow: 'auto',
            marginLeft: '1rem',
          }}
        >
          <img
            src={src}
            alt={alt}
            style={{
              width: naturalSize.width,
              height: naturalSize.height,
              display: 'block',
            }}
          />
        </div>
      )}
    </div>
  );
};

export default FullZoomImage;
