// src/types/product.ts
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  images: string[]; // Ahora es un array para admitir múltiples fotos
}
