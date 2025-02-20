// src/components/ThemeToggle.tsx
import React, { useEffect, useState } from 'react';
import '../scss/components/_themeToggle.scss'; // Importa los estilos de SCSS

const ThemeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    console.log('darkMode:', darkMode);
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('theme-dark');
    } else {
      root.classList.remove('theme-dark');
    }
  }, [darkMode]);
  
  return (
    <button
      className="theme-toggle"
      onClick={() => setDarkMode(!darkMode)}
    >
      {/* Puedes usar emojis, íconos, o texto */}
      {darkMode ? '☀️' : '🌙'}
    </button>
  );
};

export default ThemeToggle;
