import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product, ProductInCart } from '../types/products/product';

interface CartSliceState {
  products: ProductInCart[];
}

const cart = createSlice({
  name: 'cart',
  initialState: {
    products: []
  } as CartSliceState,
  reducers: {
    add: (state, action: PayloadAction<Product>) => {
      state.products = [
        ...state.products,
        {
          product: action.payload,
          amount: 1
        }
      ]
    },
    clear: (state) => {
      state.products = []
    }
  }
})

export const cartActions = cart.actions
export const reducers = cart.reducer