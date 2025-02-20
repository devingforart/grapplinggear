// src/pages/ProductsAdvanced.tsx
import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { Product } from '../types/product';
import productsData from '../components/products.json';

const ProductsAdvanced: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('default');

  const products: Product[] = productsData.products;
  const categories = Array.from(new Set(products.map(product => product.category)));

  // Filtrado por categoría y búsqueda
  let filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Ordenación según opción seleccionada
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
            <li
              onClick={() => setSelectedCategory('')}
              className={!selectedCategory ? 'active' : ''}
            >
              Todos
            </li>
            {categories.map(cat => (
              <li
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={selectedCategory === cat ? 'active' : ''}
              >
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
