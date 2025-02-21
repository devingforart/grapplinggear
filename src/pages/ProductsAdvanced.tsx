// src/pages/ProductsAdvanced.tsx
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Product } from '../types/product';
import ProductCard from '../components/ProductCard';
import { loadProducts } from '../store';  // Acción para cargar productos
import productsData from '../components/products.json';  // Los datos de los productos

const ProductsAdvanced: React.FC = () => {
  const dispatch = useDispatch();
  const products: Product[] = useSelector((state: any) => state.products.products || []);  // Asegurándonos de que sea un array vacío si no hay productos aún

  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('default');

  useEffect(() => {
    if (products.length === 0) {
      dispatch(loadProducts(productsData.products));  // Despachar la acción para cargar los productos
    }
  }, [dispatch, products.length]);

  const categories = Array.from(new Set(products.map(product => product.category)));

  let filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (sortOption === 'priceAsc') {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortOption === 'priceDesc') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  } else if (sortOption === 'nameAsc') {
    filteredProducts = [...filteredProducts].sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortOption === 'nameDesc') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.name.localeCompare(a.name));
  }

  return (
    <div className="products-advanced">
      <aside className="sidebar">
        <h3>Filtrar</h3>
        <div className="filter-section">
          <label>Categorías</label>
          <ul>
            <li onClick={() => setSelectedCategory('')} className={!selectedCategory ? 'active' : ''}>
              Todos
            </li>
            {categories.map(cat => (
              <li key={cat} onClick={() => setSelectedCategory(cat)} className={selectedCategory === cat ? 'active' : ''}>
                {cat}
              </li>
            ))}
          </ul>
        </div>
        <div className="filter-section">
          <label>Buscar</label>
          <input
            type="text"
            placeholder="Buscar productos..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="filter-section">
          <label>Ordenar por</label>
          <select value={sortOption} onChange={e => setSortOption(e.target.value)}>
            <option value="default">Relevancia</option>
            <option value="priceAsc">Precio: menor a mayor</option>
            <option value="priceDesc">Precio: mayor a menor</option>
            <option value="nameAsc">Nombre: A-Z</option>
            <option value="nameDesc">Nombre: Z-A</option>
          </select>
        </div>
      </aside>
      <main className="products-grid">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </main>
    </div>
  );
};

export default ProductsAdvanced;
