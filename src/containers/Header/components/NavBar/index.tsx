import { Link } from "react-router-dom";

import { Button } from "../../../../components/Button";

import { Nav } from "./styles";

interface INavBar {
  itemsAmount: number;
  onClearAll: () => void;
}

export const NavBar = ({ itemsAmount, onClearAll }: INavBar) => {
  return (
    <Nav.Container>
      <Link to="/">
        <h1>
          STO<strong>REDUX</strong>
        </h1>
      </Link>
      <Nav.RightSide>
        <div>
          <h3>
            Itens: <strong data-testid="items-amount">{itemsAmount}</strong>
          </h3>
        </div>
        <Button data-testid="clear-all-button" onClick={onClearAll}>
          Limpar tudo
        </Button>
      </Nav.RightSide>
    </Nav.Container>
  );
};
