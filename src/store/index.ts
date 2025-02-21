// src/store/index.ts
import { createStore } from 'redux';
import { Product } from "../types/product";

// Definir la interfaz para el estado del carrito
interface CartItem {
  id: number;
  quantity: number;
  size: string;
}

interface CartState {
  cart: CartItem[];
}

// Estado inicial
const initialState: CartState = {
  cart: [],
};

// Acciones
export const ADD_TO_CART = 'ADD_TO_CART'; // Exporta la constante
export interface AddToCartAction {
  type: typeof ADD_TO_CART;
  payload: Product[];
}

interface RemoveFromCartAction {
  type: 'REMOVE_FROM_CART';
  payload: { id: number };
}

type CartAction = AddToCartAction | RemoveFromCartAction; // Asegúrate de incluir AddToCartAction

// Reducer
const cartReducer = (state = initialState, action: CartAction): CartState => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, ...action.payload.map(product => ({
          id: product.id,
          quantity: 1, // Por ejemplo, por defecto una unidad
          size: '', // Asumimos un tamaño vacío, ajusta según tus necesidades
        }))],
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    default:
      return state;
  }
};

// Crear y exportar el store con los tipos correctos
const store = createStore(cartReducer);

export default store;
