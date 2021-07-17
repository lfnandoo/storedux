import { useCallback } from "react";

import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { cartActions } from "../../redux/Cart.store";

import { Button } from "../../components/Button";
import { Product } from "./components/Product";

import * as Styles from "./styles";

export const Cart = () => {
  const productsInCart = useAppSelector((state) => state.cart.products);
  const dispatch = useAppDispatch();

  const onIncrementProduct = useCallback(
    (productId) => {
      dispatch(cartActions.increment(productId));
    },
    [dispatch]
  );

  const onDecrementProduct = useCallback(
    (productId) => {
      dispatch(cartActions.decrement(productId));
    },
    [dispatch]
  );

  return (
    <Styles.Container>
      <h1>Carrinho</h1>
      <section>
        <Styles.ProductList>
          {productsInCart.map((item) => (
            <Product
              item={item}
              onIncrementProduct={onIncrementProduct}
              onDecrementProduct={onDecrementProduct}
            />
          ))}
        </Styles.ProductList>
        <Styles.Checkout>
          <Button>Fazer checkout ➡</Button>
        </Styles.Checkout>
      </section>
    </Styles.Container>
  );
};
