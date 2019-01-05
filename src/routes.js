import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Components
import Home from "./pages/home";
import NotFound from "./pages/root/notfound";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/entrar" component={SignIn} />
      <Route path="/registrar" component={SignUp} />
      <Route path="*" component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
