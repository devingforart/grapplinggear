// src/pages/ProductDetail.tsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Product } from '../types/product';
import productsData from '../components/products.json';
import FullZoomImage from '../components/FullZoomImage';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const products: Product[] = productsData.products;
  const product = products.find(item => item.id.toString() === id);

  // Controla la imagen seleccionada de la galería
  const [selectedImage, setSelectedImage] = useState(product?.images[0] || '');

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="product-detail">
      <div className="product-detail__container">
        {/* Vista del producto con FullZoomImage */}
        <div className="product-detail__viewer">
          <FullZoomImage
            src={selectedImage}
            alt={product.name}
            thumbnailWidth={500}  // Tamaño moderado del thumbnail
            thumbnailHeight={400}
          />
        </div>
        {/* Información del producto */}
        <div className="product-detail__info">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p className="price">${product.price}</p>
          <button className="btn add-to-cart">Añadir al Carrito</button>
        </div>
      </div>
      {/* Galería de miniaturas */}
      <div className="product-detail__gallery">
        {product.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`${product.name} ${index + 1}`}
            className={`product-detail__thumb ${selectedImage === img ? 'selected' : ''}`}
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductDetail;
