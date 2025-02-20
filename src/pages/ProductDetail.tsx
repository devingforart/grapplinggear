// src/pages/ProductDetail.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { Product } from '../types/product';
import productsData from '../components/products.json';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  console.log('ID recibido:', id);
  
  const products: Product[] = productsData.products;
  // Convertimos el id del producto a string para comparar correctamente
  const product = products.find((item) => item.id.toString() === id);

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="product-detail">
      {/* Muestra la primera imagen como principal */}
      <img src={product.images[0]} alt={product.name} />
      
      {/* Si existen varias imágenes, se muestra una galería */}
      {product.images.length > 1 && (
        <div className="product-gallery">
          {product.images.map((img, idx) => (
            <img key={idx} src={img} alt={`${product.name} ${idx + 1}`} />
          ))}
        </div>
      )}
      
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button>Añadir al Carrito</button>
    </div>
  );
};

export default ProductDetail;
