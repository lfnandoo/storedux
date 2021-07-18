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
    },
    increment: (state, action: PayloadAction<string>) => {
      state.products = state.products.map((item) => item.product.id === action.payload ? { ...item, amount: item.amount + 1 } : item)
    },
    decrement: (state, action: PayloadAction<string>) => {
      state.products = state.products.map((item) => item.product.id === action.payload ? { ...item, amount: item.amount - 1 } : item)
    },
    remove: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter((item) => item.product.id !== action.payload)
    }
  }
})

export const cartActions = cart.actions
export const reducers = cart.reducer