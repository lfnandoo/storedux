import { Products } from "../../containers/Products";
import * as Styles from "./styles";

const App: React.FC = () => {
  return (
    <>
      <Styles.Container>
        <Products />
      </Styles.Container>
    </>
  );
};

export default App;
