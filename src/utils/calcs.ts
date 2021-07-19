import { ProductInCart } from '../types/products/product';

export const calcTotalPrice = (products: ProductInCart[]) => {
  let total = 0;

  products.forEach((item: ProductInCart) => {
      const price = item.amount * Number(item.product.price);
      total = total + price;
    });

  return total;
}

export const calcItemsAmount = (products: ProductInCart[]) => {
  let amount = 0;

  products.forEach((item) => {
    amount = amount + item.amount;
  });

    return amount;
}