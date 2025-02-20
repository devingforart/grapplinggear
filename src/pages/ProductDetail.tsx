import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Product } from '../types/product';
import FullZoomImage from '../components/FullZoomImage';
import { CartContext } from '../context/CartContext';
import { InventoryContext } from '../context/InventoryContext';
import { useNotification } from '../context/NotificationContext';
import { loadProducts } from '../store'; // Cambié esto de fetchProducts a loadProducts

// Importa los productos si están en un archivo (por ejemplo, products.json)
import productsData from '../components/products.json'; // Asegúrate de que este archivo exista

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();

  // Obtener productos desde el estado de Redux o usar un array vacío por defecto
  const products: Product[] = useSelector((state: any) => state.products.products || []);
  
  // Buscar el producto específico por ID
  const product = products.find(item => item.id.toString() === id);

  const { addToCart } = useContext(CartContext);
  const { checkStock } = useContext(InventoryContext);
  const { showNotification } = useNotification();

  const [selectedImage, setSelectedImage] = useState(product?.images[0] || '');
  const [selectedSize, setSelectedSize] = useState<string>('');

  // Fetch de productos si no están en el estado de Redux
  useEffect(() => {
    if (!products.length) {
      // Aquí pasamos solo la propiedad products de productsData
      dispatch(loadProducts(productsData.products)); // Accedemos a 'products' dentro de 'productsData'
    }
  }, [dispatch, products.length]);

  if (!product) {
    return <div className="product-detail__notfound">Producto no encontrado</div>;
  }

  const availableStock = selectedSize ? checkStock(product.id, selectedSize) : 0;

  const handleAddToCart = () => {
    if (!selectedSize) {
      showNotification("Por favor, selecciona un talle.", "error");
      return;
    }
    if (availableStock < 1) {
      showNotification("Lo sentimos, no hay stock disponible para el talle seleccionado.", "error");
      return;
    }
    addToCart({ product, quantity: 1, size: selectedSize });
    showNotification("Agregado al carrito.", "success");
  };

  const formatPrice = (price: number) => {
    return `$${price.toLocaleString('es-AR')}`; // Utiliza 'es-AR' para formato con separadores de miles
  };

  return (
    <div className="product-detail">
      <div className="product-detail__container">
        <div className="product-detail__viewer">
          <FullZoomImage
            src={selectedImage}
            alt={product.name}
            thumbnailWidth={500}
            thumbnailHeight={400}
          />
        </div>
        <div className="product-detail__info">
          <h2 className="product-detail__title">{product.name}</h2>
          <p className="product-detail__description">{product.description}</p>
          <p className="product-detail__price">{formatPrice(product.price)}</p>
          <div className="product-detail__extra">
            <div className="product-detail__sizes">
              <h3 className="product-detail__subtitle">Talles Disponibles</h3>
              <ul className="product-detail__size-list">
                {product.availableSizes.map((size, index) => (
                  <li 
                    key={index} 
                    className={`product-detail__size-item ${selectedSize === size ? 'selected' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <button 
            className="btn product-detail__add-to-cart"
            onClick={handleAddToCart}
            disabled={!selectedSize || availableStock < 1}
          >
            Añadir al Carrito
          </button>
        </div>
      </div>
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
