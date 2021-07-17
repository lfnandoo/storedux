import { Route } from "react-router-dom";

import { Header } from "../containers/Header";
import Home from "../pages/Home";

const Routes = () => {
  return (
    <>
      <Header />
      <Route path="/" component={Home} exact />
    </>
  );
};

export default Routes;
