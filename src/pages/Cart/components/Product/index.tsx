import { ProductInCart } from "../../../../types/products/product";
import formatToBrl from "../../../../utils/formatToBrl";

import * as Styles from "./styles";

interface IProduct {
  item: ProductInCart;
  onDecrementProduct: (id: string) => void;
  onIncrementProduct: (id: string) => void;
  onRemoveProduct: (id: string) => void;
}

export const Product: React.FC<IProduct> = (props) => {
  const { item, onDecrementProduct, onIncrementProduct, onRemoveProduct } =
    props;
  const { amount } = item;
  const { name, price, image, id } = item.product;
  const parsePrice = Number(price);

  const handleDecrementProduct = () => {
    if (amount > 1) {
      onDecrementProduct(id);
    } else {
      onRemoveProduct(id);
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
            {formatToBrl(parsePrice)} x {amount} ={" "}
            <strong data-testid="formated-price">
              {formatToBrl(parsePrice * amount)}
            </strong>
          </p>
        </Styles.Info>
        <Styles.Actions>
          <p data-testid="decrement-btn" onClick={handleDecrementProduct}>
            -
          </p>
          <span>{amount}</span>
          <p data-testid="increment-btn" onClick={handleIncrementProduct}>
            +
          </p>
        </Styles.Actions>
      </Styles.Content>
    </Styles.Container>
  );
};
