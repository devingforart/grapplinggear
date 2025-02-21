// src/types/product.ts

export interface Product {
  id: number;
  name: string;
  category: string;                // Propiedad agregada para la categoría
  description: string;
  price: number;
  images: string[];
  availableSizes: string[];        // Propiedad agregada para los talles disponibles
  stockBySize: Partial<Record<string, number>>; // Permite que algunas claves (como "XL") puedan faltar
  new: boolean;
  landing: boolean;
}
