import { useAppSelector } from "../../hooks/redux";

import cartImg from "../../assets/shopping-cart-outline.svg";

import * as Styles from "./styles";

export const Cart = () => {
  const productsInCart = useAppSelector((state) => state.cart.products.length);

  if (productsInCart < 1) {
    return null;
  }

  return (
    <Styles.Container to="/cart">
      <img src={cartImg} alt="cart" />
    </Styles.Container>
  );
};
