import { Products } from "../../containers/Products";
import { CartLink } from "../../components/CartLink";

import * as Styles from "./styles";

export const Home: React.FC = () => {
  return (
    <Styles.Container>
      <Products />
      <CartLink />
    </Styles.Container>
  );
};
