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
        <button>Limpar tudo</button>
      </Nav.RightSide>
    </Nav.Container>
  );
};
