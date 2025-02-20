// src/components/CategoryFilter.tsx
import React from 'react';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="category-filter">
      <button 
        onClick={() => onSelectCategory('')}
        className={!selectedCategory ? 'active' : ''}
      >
        Todos
      </button>
      {categories.map(category => (
        <button 
          key={category}
          onClick={() => onSelectCategory(category)}
          className={selectedCategory === category ? 'active' : ''}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
