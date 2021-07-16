import { useDispatch, useSelector } from "react-redux";

import Card from "./components/Card";

import { DATA } from "../../mocks/data";
import { Product } from "../../types/products/product";

import * as Styles from "./styles";
import { actions } from "../../redux/actions/cart";
import { selectors } from "../../redux/selectors/cart";

export const Products: React.FC = () => {
  const cart = useSelector(selectors.getProducts);
  console.log(cart);
  const dispatch = useDispatch();

  const onAddCart = (item: Product) => {
    dispatch(actions.addToCart(item));
  };

  return (
    <Styles.ProductsList>
      {DATA.map((item) => {
        return <Card key={item.id} item={item} onAddCart={onAddCart} />;
      })}
    </Styles.ProductsList>
  );
};
