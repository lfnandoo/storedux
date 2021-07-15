import { DATA } from "../../mocks/data";
import Card from "./components/Card";

const Products: React.FC = () => {
  return (
    <ul>
      {DATA.map((item) => {
        return <Card item={item} />;
      })}
    </ul>
  );
};

export default Products;
