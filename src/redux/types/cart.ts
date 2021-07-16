import { Product } from '../../types/products/product';

export const types = {
  CART_ADD_PRODUCT: 'CART_ADD_PRODUCT'
}

export interface ICartAction {
  type: string;
  payload: Product
}