import { Route, Switch } from "react-router-dom";

import { Header } from "../containers/Header";
import { Home } from "../pages/Home";
import { Cart } from "../pages/Cart";
import { NotFound } from "../pages/NotFound";

import * as Styles from "./styles";

const Routes = () => {
  return (
    <>
      <Header />
      <Styles.PageWrapper>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/cart" component={Cart} exact />
          <Route component={NotFound} />
        </Switch>
      </Styles.PageWrapper>
    </>
  );
};

export default Routes;
