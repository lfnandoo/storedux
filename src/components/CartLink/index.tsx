import cartImg from "../../assets/shopping-cart-outline.svg";

import * as Styles from "./styles";

interface ICartLink {
  productsInCart: number;
}

export const CartLink: React.FC<ICartLink> = ({ productsInCart }) => {
  if (productsInCart < 1) {
    return null;
  }

  return (
    <Styles.Container data-testid="cart-btn" to="/cart">
      <img src={cartImg} alt="cart" />
    </Styles.Container>
  );
};
