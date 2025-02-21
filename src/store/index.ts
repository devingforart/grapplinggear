import { createStore } from 'redux';

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

// Estado inicial con productos vacíos
const initialState = {
  products: [], // Asegúrate de inicializar con un array vacío
  cart: []
};

// Reducer para manejar el estado de productos y carrito
const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        products: action.payload // Aquí almacenamos los productos desde el archivo JSON
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id)
      };
    default:
      return state;
  }
};

const store = createStore(rootReducer);

export default store;
