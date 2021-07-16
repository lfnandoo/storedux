import Card from "./components/Card";

import { DATA } from "../../mocks/data";
import { Product } from "../../types/products/product";
import { cartActions } from "../../redux/Cart.store";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";

import * as Styles from "./styles";

export const Products: React.FC = () => {
  const dispatch = useAppDispatch();

  const onAddCart = (item: Product) => {
    dispatch(cartActions.add(item));
  };

  return (
    <Styles.ProductsList>
      {DATA.map((item) => {
        return <Card key={item.id} item={item} onAddCart={onAddCart} />;
      })}
    </Styles.ProductsList>
  );
};
