// src/store/index.ts
import { createStore, combineReducers } from 'redux';
import { Product } from '../types/product';

// Definir las interfaces para el estado del carrito y productos
interface CartItem {
  id: number;
  quantity: number;
  size: string;
}

interface CartState {
  cart: CartItem[];
}

interface ProductsState {
  products: Product[];
}

// Estado inicial de los productos
const initialProductsState: ProductsState = {
  products: [],
};

// Estado inicial del carrito
const initialCartState: CartState = {
  cart: [],
};

// Acciones para el carrito
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const LOAD_PRODUCTS = 'LOAD_PRODUCTS'; // Acción para cargar productos

export interface AddToCartAction {
  type: typeof ADD_TO_CART;
  payload: Product[];
}

interface RemoveFromCartAction {
  type: typeof REMOVE_FROM_CART;
  payload: { id: number };
}

interface LoadProductsAction {
  type: typeof LOAD_PRODUCTS;
  payload: Product[]; // Carga los productos
}

type ProductsAction = LoadProductsAction; // Solo necesitamos esta acción aquí

type CartAction = AddToCartAction | RemoveFromCartAction;

// Reducer de productos
const productsReducer = (state = initialProductsState, action: ProductsAction): ProductsState => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

// Reducer del carrito
const cartReducer = (state = initialCartState, action: CartAction): CartState => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, ...action.payload.map(product => ({
          id: product.id,
          quantity: 1,
          size: '',
        }))],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload.id),
      };
    default:
      return state;
  }
};

// Combine reducers
const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

// Crear el store
const store = createStore(rootReducer);

export default store;

// Nueva acción para cargar productos
export const loadProducts = (products: Product[]) => ({
  type: LOAD_PRODUCTS,
  payload: products,
});

