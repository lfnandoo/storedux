import { NavBar } from "./containers/NavBar";
import Products from "./containers/Products";
import { Header } from "./App.styles";

const App: React.FC = () => {
  return (
    <>
      <Header.Container>
        <NavBar />
      </Header.Container>
      <main>
        <Products />
      </main>
    </>
  );
};

export default App;
