import { useAppSelector } from "../../hooks/redux";

import { Products } from "../../containers/Products";
import { CartLink } from "../../components/CartLink";

import * as Styles from "./styles";

export const Home: React.FC = () => {
  const productsInCart = useAppSelector((state) => state.cart.products.length);

  return (
    <Styles.Container>
      <Products />
      <CartLink productsInCart={productsInCart} />
    </Styles.Container>
  );
};
