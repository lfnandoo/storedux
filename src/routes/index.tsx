import { Route, Switch } from "react-router-dom";

import { Header } from "../containers/Header";
import { PageWrapper } from "../containers/PageWrapper";
import { Home } from "../pages/Home";
import { Cart } from "../pages/Cart";
import { NotFound } from "../pages/NotFound";

const Routes = () => {
  return (
    <>
      <Header />
      <PageWrapper>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/cart" component={Cart} exact />
          <Route component={NotFound} />
        </Switch>
      </PageWrapper>
    </>
  );
};

export default Routes;
