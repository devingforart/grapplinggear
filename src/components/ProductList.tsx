// src/components/ProductList.tsx
import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { Product } from '../types/product';
import productsData from './products.json';
import CategoryFilter from './CategoryFilter';

const ProductList: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('default');

  const products: Product[] = productsData.products;

  // Obtén la lista única de categorías
  const categories = Array.from(new Set(products.map(product => product.category)));

  // Filtra los productos según categoría y búsqueda
  let filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Ordena los productos según la opción seleccionada
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
    <div className="product-list">
      <div className="product-list__controls">
        <CategoryFilter 
          categories={categories} 
          selectedCategory={selectedCategory} 
          onSelectCategory={setSelectedCategory} 
        />
        <div className="product-list__search-sort">
          <input 
            type="text" 
            placeholder="Buscar productos..." 
            value={searchQuery} 
            onChange={e => setSearchQuery(e.target.value)} 
          />
          <select value={sortOption} onChange={e => setSortOption(e.target.value)}>
            <option value="default">Ordenar por</option>
            <option value="priceAsc">Precio: menor a mayor</option>
            <option value="priceDesc">Precio: mayor a menor</option>
            <option value="nameAsc">Nombre: A-Z</option>
            <option value="nameDesc">Nombre: Z-A</option>
          </select>
        </div>
      </div>
      <div className="product-list__grid">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
