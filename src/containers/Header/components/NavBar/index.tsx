import { useMemo } from "react";
import { Button } from "../../../../components/Button";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import { cartActions } from "../../../../redux/Cart.store";

import { Nav } from "./styles";

export const NavBar: React.FC = () => {
  const dispatch = useAppDispatch();
  const cartProducts = useAppSelector((state) => state.cart.products);

  const onClearAll = () => {
    dispatch(cartActions.clear());
  };

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
    <Nav.Container>
      <h1>
        STO<strong>REDUX</strong>
      </h1>
      <Nav.RightSide>
        <div>
          <h3>
            Itens: <strong>{calcItemsAmount}</strong>
          </h3>
        </div>
        <Button onClick={onClearAll}>Limpar tudo</Button>
      </Nav.RightSide>
    </Nav.Container>
  );
};
