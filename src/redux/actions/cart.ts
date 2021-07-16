import { ICartAction, types } from '../types/cart'
import { Product } from '../../types/products/product'

const addToCart = (product: Product): ICartAction => ({
  type: types.CART_ADD_PRODUCT,
  payload: product
})

export const actions = {
  addToCart
}