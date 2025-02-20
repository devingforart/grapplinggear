// src/components/ZoomImage.tsx
import React, { useState, useRef } from 'react';

interface ZoomImageProps {
  src: string;
  alt?: string;
  width?: number;   // Ancho del contenedor en px (por defecto: 300)
  height?: number;  // Alto del contenedor en px (por defecto: 300)
  zoomLevel?: number; // Factor de zoom (por defecto: 2)
}

const ZoomImage: React.FC<ZoomImageProps> = ({
  src,
  alt = '',
  width = 300,
  height = 300,
  zoomLevel = 2,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lensStyle, setLensStyle] = useState<{ display: string; left: number; top: number }>({
    display: 'none',
    left: 0,
    top: 0,
  });
  const [backgroundPosition, setBackgroundPosition] = useState('0% 0%');

  const lensSize = 100; // Tamaño de la lupa (en px)

  const handleMouseMove = (e: React.MouseEvent) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calcula la posición de la lupa centrada en el cursor
    let lensX = x - lensSize / 2;
    let lensY = y - lensSize / 2;

    // Evita que la lupa se salga del contenedor
    if (lensX < 0) lensX = 0;
    if (lensY < 0) lensY = 0;
    if (lensX > rect.width - lensSize) lensX = rect.width - lensSize;
    if (lensY > rect.height - lensSize) lensY = rect.height - lensSize;

    // Calcula la posición de fondo para la lupa (en porcentaje)
    const bgPosX = (x / rect.width) * 100;
    const bgPosY = (y / rect.height) * 100;

    setBackgroundPosition(`${bgPosX}% ${bgPosY}%`);
    setLensStyle({ display: 'block', left: lensX, top: lensY });
  };

  const handleMouseEnter = () => {
    setLensStyle(prev => ({ ...prev, display: 'block' }));
  };

  const handleMouseLeave = () => {
    setLensStyle(prev => ({ ...prev, display: 'none' }));
  };

  return (
    <div
      className="zoom-image-container"
      ref={containerRef}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        position: 'relative',
        overflow: 'hidden',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Imagen base */}
      <img
        src={src}
        alt={alt}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
      {/* Lupa o zoom */}
      <div
        className="zoom-lens"
        style={{
          display: lensStyle.display,
          position: 'absolute',
          left: lensStyle.left,
          top: lensStyle.top,
          width: `${lensSize}px`,
          height: `${lensSize}px`,
          borderRadius: '50%',
          border: '2px solid var(--accent-color)',
          backgroundImage: `url(${src})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: `${width * zoomLevel}px ${height * zoomLevel}px`,
          backgroundPosition: backgroundPosition,
          pointerEvents: 'none',
          boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
        }}
      />
    </div>
  );
};

export default ZoomImage;
