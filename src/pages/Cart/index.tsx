import { useCallback, useMemo } from "react";

import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { cartActions } from "../../redux/Cart.store";
import { calcTotalPrice } from "../../utils/calcs";
import formatToBrl from "../../utils/formatToBrl";

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

  const onRemoveProduct = useCallback(
    (productId) => {
      dispatch(cartActions.remove(productId));
    },
    [dispatch]
  );

  const getTotal = useMemo(
    () => calcTotalPrice(productsInCart),
    [productsInCart]
  );

  return (
    <Styles.Container>
      <h1>Carrinho</h1>
      <section>
        <Styles.ProductList>
          {productsInCart.map((item) => (
            <Product
              key={item.product.id}
              item={item}
              onIncrementProduct={onIncrementProduct}
              onDecrementProduct={onDecrementProduct}
              onRemoveProduct={onRemoveProduct}
            />
          ))}
        </Styles.ProductList>
        <Styles.Checkout>
          <div>
            <span>{formatToBrl(getTotal)}</span>
          </div>
          <Styles.Button>Continuar ➡</Styles.Button>
        </Styles.Checkout>
      </section>
    </Styles.Container>
  );
};
