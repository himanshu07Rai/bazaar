// import { HashRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cart from "./components/cart";
import Landing from "./components/Landing";
import ProductGrid from "./components/ProductGrid";
const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/Cart" component={Cart} />
          <Route exact path="/products" component={ProductGrid} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
