import { useState, useCallback, useEffect } from "react";

import Card from "./components/Card";

import productResource from "../../services/resources/productResources";
import { Product } from "../../types/products/product";
import { cartActions } from "../../redux/Cart.store";
import { useAppDispatch } from "../../hooks/redux";

import * as Styles from "./styles";
import { DATA } from "../../mocks/data";

export const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function getData() {
      try {
        const { data } = await productResource.getProducts();
        setProducts(data);
      } catch (e) {
        // tratar erros aqui <3
      }
    }

    getData();
  }, []);

  const onAddCart = useCallback(
    (item: Product) => {
      dispatch(cartActions.add(item));
    },
    [dispatch]
  );

  return (
    <Styles.ProductsList>
      {DATA.map((item) => {
        return <Card key={item.id} item={item} onAddCart={onAddCart} />;
      })}
      {products &&
        products.map((item) => {
          return <Card key={item.id} item={item} onAddCart={onAddCart} />;
        })}
    </Styles.ProductsList>
  );
};
