import { Route, Switch } from "react-router-dom";

import { Cart } from "../components/Cart";
import { Header } from "../containers/Header";
import { NotFound } from "../pages/NotFound";
import { Home } from "../pages/Home";

import * as Styles from "./styles";

const Routes = () => {
  return (
    <>
      <Header />
      <Styles.PageWrapper>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/" component={Home} exact />
          <Route component={NotFound} />
        </Switch>
      </Styles.PageWrapper>
      <Cart />
    </>
  );
};

export default Routes;
