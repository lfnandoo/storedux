import { ProductInCart } from "../../../../types/products/product";

import * as Styles from "./styles";

interface IProduct {
  item: ProductInCart;
  onDecrementProduct: (id: string) => void;
  onIncrementProduct: (id: string) => void;
}

export const Product: React.FC<IProduct> = ({
  item,
  onDecrementProduct,
  onIncrementProduct,
}) => {
  const { amount } = item;
  const { name, price, image, id } = item.product;

  const handleDecrementProduct = () => {
    if (amount > 1) {
      onDecrementProduct(id);
    }
  };

  const handleIncrementProduct = () => {
    onIncrementProduct(id);
  };

  return (
    <Styles.Container>
      <img src={image} alt={name} />
      <Styles.Content>
        <Styles.Info>
          <span>{name}</span>
          <p>
            {price} x {amount} = <strong>${Number(price) * amount}</strong>
          </p>
        </Styles.Info>
        <Styles.Actions>
          <p onClick={handleDecrementProduct}>-</p>
          <span>{amount}</span>
          <p onClick={handleIncrementProduct}>+</p>
        </Styles.Actions>
      </Styles.Content>
    </Styles.Container>
  );
};
