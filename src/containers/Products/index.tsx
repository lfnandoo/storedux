import { DATA } from "../../mocks/data";
import Card from "./components/Card";
import * as Styles from "./styles";

export const Products: React.FC = () => {
  return (
    <Styles.ProductsList>
      {DATA.map((item) => {
        return <Card item={item} />;
      })}
    </Styles.ProductsList>
  );
};
