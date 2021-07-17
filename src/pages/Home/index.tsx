import { Products } from "../../containers/Products";
import * as Styles from "./styles";

export const Home: React.FC = () => {
  return (
    <Styles.Container>
      <Products />
    </Styles.Container>
  );
};
