import { combineReducers } from 'redux';

import { Product } from '../../types/products/product';
import { ICartAction, types } from '../types/cart';

const cart = (state: Product[] = [], action: ICartAction): Product[] => {
  switch (action.type) {
    case types.CART_ADD_PRODUCT:
      return [...state, action.payload];
    default:
      return state
  }
}

export const reducers = combineReducers({
  cart
})