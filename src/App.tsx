import NavBar from "./containers/NavBar";
import Products from "./containers/Products";
import "./App.css";

const App: React.FC = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Products />
      </main>
    </>
  );
};

export default App;
