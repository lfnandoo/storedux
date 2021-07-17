import { Button } from "../../components/Button";

import { Nav } from "./styles";

export const NavBar: React.FC = () => {
  return (
    <Nav.Container>
      <h1>
        STO<strong>REDUX</strong>
      </h1>
      <Nav.RightSide>
        <div>
          <h3>
            Itens: <strong>0</strong>
          </h3>
        </div>
        <Button>Limpar tudo</Button>
      </Nav.RightSide>
    </Nav.Container>
  );
};
