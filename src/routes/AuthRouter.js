import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import LoginAdmin from "../pages/LoginAdmin ";
import LoginClient from "../pages/LoginClient";
import Register from "../pages/Register";

const AuthRouter = () => {
  return (
    <Switch>
      <Route exact path="/auth/login" component={LoginClient} />
      <Route exact path="/auth/admin" component={LoginAdmin} />
      <Route exact path="/auth/register" component={Register} />
      <Redirect to="/auth/login" />
    </Switch>
  );
};

export default AuthRouter;
