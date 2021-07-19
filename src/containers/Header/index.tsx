import { useCallback, useMemo } from "react";

import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { cartActions } from "../../redux/Cart.store";
import { calcItemsAmount } from "../../utils/calcs";

import { NavBar } from "./components/NavBar";

import * as Styles from "./styles";

export const Header = () => {
  const dispatch = useAppDispatch();
  const productsInCart = useAppSelector((state) => state.cart.products);

  const onClearAll = useCallback(() => {
    dispatch(cartActions.clear());
  }, [dispatch]);

  const getItemsAmount = useMemo(() => {
    return calcItemsAmount(productsInCart);
  }, [productsInCart]);

  return (
    <Styles.Container>
      <NavBar itemsAmount={getItemsAmount} onClearAll={onClearAll} />
    </Styles.Container>
  );
};
