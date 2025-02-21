import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import { useSelector, useDispatch } from 'react-redux';
import productsData from './products.json'; // Importamos los productos iniciales
import { Product } from '../types/product';
import { ADD_TO_CART } from '../store'; // Asegúrate de importar las acciones necesarias

const ProductGrid: React.FC = () => {
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(true); // Estado para controlar la visibilidad de la flecha

  // Función para verificar el scroll
  const handleScroll = () => {
    if (window.scrollY > 100) { // Si el usuario ha hecho scroll hacia abajo más de 100px
      setIsVisible(false);
    } else {
    return
    }
  };

  // Acceder a los productos desde el estado global
  const products: Product[] = useSelector((state: any) => state.products);

  // Si el estado de productos está vacío, inicializamos con los productos desde el archivo JSON
  useEffect(() => {
    if (products.length === 0) {
      dispatch({ type: ADD_TO_CART, payload: productsData.products }); // Agregar productos al estado global
    }

    // Agregar el event listener para el scroll
    window.addEventListener('scroll', handleScroll);

    // Limpiar el event listener cuando el componente se desmonte
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dispatch, products.length]);

  if (!products || products.length === 0) {
    return <div>Cargando productos...</div>;
  }

  return (
    <>
      {/* Flecha animada centrada en la pantalla */}
      {isVisible && (
        <motion.div
          className="scroll-arrow"
          animate={{ y: [0, 10, 0] }} // Hace un pequeño rebote
          transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 24" width="30" height="30">
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M12 21l-8-8h5V3h6v10h5z" />
          </svg>
        </motion.div>
      )}

      <motion.section
        id="nuestra-coleccion"
        className="product-grid-creative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="collection-intro">
          <h2>Nuevos arribos</h2>
          <p>
            Descubre la fusión perfecta entre tecnología y pasión por el grappling.
          </p>
        </div>
        <div className="product-grid-creative__list">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </motion.section>
    </>
  );
};

export default ProductGrid;
