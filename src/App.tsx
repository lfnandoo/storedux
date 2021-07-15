import { NavBar } from "./containers/NavBar";
import { Products } from "./containers/Products";
import * as Styles from "./App.styles";

const App: React.FC = () => {
  return (
    <>
      <Styles.HeaderContainer>
        <NavBar />
      </Styles.HeaderContainer>
      <Styles.MainContainer>
        <Products />
      </Styles.MainContainer>
    </>
  );
};

export default App;
