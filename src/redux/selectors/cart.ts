import { Product } from '../../types/products/product'

interface Products {
  cart: Product[]
}

interface IReducers {
  cartReducers: Products;
}

const getProducts = (state: IReducers) => state.cartReducers.cart

export const selectors = { getProducts }