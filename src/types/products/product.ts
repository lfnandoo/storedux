export interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
}

export interface ProductInCart {
  product: Product;
  amount: number;
}