import { useCallback, useMemo } from "react";

import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { cartActions } from "../../redux/Cart.store";

import { NavBar } from "./components/NavBar";

import * as Styles from "./styles";

export const Header = () => {
  const dispatch = useAppDispatch();
  const cartProducts = useAppSelector((state) => state.cart.products);

  const onClearAll = useCallback(() => {
    dispatch(cartActions.clear());
  }, [dispatch]);

  const calcItemsAmount = useMemo(() => {
    let amount = 0;
    if (cartProducts.length > 0) {
      cartProducts.forEach((product) => {
        amount = amount + product.amount;
      });
    }

    return amount;
  }, [cartProducts]);

  return (
    <Styles.Container>
      <NavBar itemsAmount={calcItemsAmount} onClearAll={onClearAll} />
    </Styles.Container>
  );
};
