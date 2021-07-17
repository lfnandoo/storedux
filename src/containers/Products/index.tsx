import { useState, useCallback, useEffect, useMemo } from "react";

import { Card, CardShimmer } from "./components/Card";

import productResource from "../../services/resources/productResources";
import { Product } from "../../types/products/product";
import { cartActions } from "../../redux/Cart.store";
import { useAppDispatch } from "../../hooks/redux";

import * as Styles from "./styles";

export const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function getData() {
      try {
        const { data } = await productResource.getProducts();
        setProducts(data);
        setIsLoading(false);
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
      {isLoading && !products.length && (
        <>
          <CardShimmer />
          <CardShimmer />
          <CardShimmer />
          <CardShimmer />
          <CardShimmer />
          <CardShimmer />
        </>
      )}
      {!isLoading &&
        products.length &&
        products.map((item) => {
          return <Card key={item.id} item={item} onAddCart={onAddCart} />;
        })}
    </Styles.ProductsList>
  );
};
