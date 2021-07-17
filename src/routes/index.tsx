import { Route, Switch } from "react-router-dom";

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
          <Route component={NotFound} />
        </Switch>
      </Styles.PageWrapper>
    </>
  );
};

export default Routes;
