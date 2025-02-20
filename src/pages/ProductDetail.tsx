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
    return <div className="product-detail__notfound">Producto no encontrado</div>;
  }

  return (
    <div className="product-detail">
      <div className="product-detail__container">
        {/* Vista del producto */}
        <div className="product-detail__viewer">
          <FullZoomImage
            src={selectedImage}
            alt={product.name}
            thumbnailWidth={500}
            thumbnailHeight={400}
          />
        </div>
        {/* Información del producto */}
        <div className="product-detail__info">
          <h2 className="product-detail__title">{product.name}</h2>
          <p className="product-detail__description">{product.description}</p>
          <p className="product-detail__price">${product.price}</p>

          {/* Sección de talles y stock */}
          <div className="product-detail__extra">
            <div className="product-detail__sizes">
              <h3 className="product-detail__subtitle">Talles Disponibles</h3>
              <ul className="product-detail__size-list">
                {product.availableSizes &&
                  product.availableSizes.map((size, index) => (
                    <li key={index} className="product-detail__size-item">{size}</li>
                  ))}
              </ul>
            </div>
            <div className="product-detail__stock">
              <h3 className="product-detail__subtitle">Stock</h3>
              <p className="product-detail__stock-info">{product.stock} unidades disponibles</p>
            </div>
          </div>

          <button className="btn product-detail__add-to-cart">Añadir al Carrito</button>
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
