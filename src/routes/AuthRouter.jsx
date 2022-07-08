import React from "react";
import { Redirect, Route,Switch } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";

const AuthRouter = () => {
  return (
    <Switch>
      <Route exact path="/auth/login" component={Login} />
      <Route exact path="/auth/register" component={Register} />
      <Redirect to="/auth/login" />
    </Switch>
  );
};

export default AuthRouter;