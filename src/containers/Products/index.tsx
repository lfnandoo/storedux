import { useState, useCallback, useEffect } from "react";

import { Card, CardShimmer } from "./components/Card";
import { Pagination } from "../../components/Pagination";

import productResource from "../../services/resources/productResources";
import splitArrayIntoChunksOfLength from "../../utils/splitArrayIntoChunksOfLength";
import { Product } from "../../types/products/product";
import { cartActions } from "../../redux/Cart.store";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";

import * as Styles from "./styles";

const ITEMS_PER_PAGE = 6;

export const Products: React.FC = () => {
  const [products, setProducts] = useState<Array<Product[]>>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(0);
  const dispatch = useAppDispatch();
  const cartProducts = useAppSelector((state) => state.cart.products);

  useEffect(() => {
    async function getData() {
      try {
        const { data } = await productResource.getProducts();
        const paginateProducts = splitArrayIntoChunksOfLength(
          data,
          ITEMS_PER_PAGE
        );
        setProducts(paginateProducts);
        setIsLoading(false);
      } catch (e) {
        // tratar erros aqui <3
      }
    }

    getData();
  }, []);

  const onChangePage = useCallback((newPage) => {
    setPage(newPage);
  }, []);

  const onAddCart = useCallback(
    (item: Product) => {
      dispatch(cartActions.add(item));
    },
    [dispatch]
  );

  return (
    <>
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
          products[page].map((item) => {
            let isAdded = false;

            if (cartProducts.length) {
              isAdded = Boolean(
                cartProducts.find((cartItem) => cartItem.product.id === item.id)
              );
            }

            return (
              <Card
                key={item.id}
                item={item}
                onAddCart={onAddCart}
                isAdded={isAdded}
              />
            );
          })}
      </Styles.ProductsList>
      <Pagination
        page={page}
        amount={products.length}
        onChangePage={onChangePage}
      />
    </>
  );
};
