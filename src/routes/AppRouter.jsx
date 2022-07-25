import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import Home from "../pages/Home";
import PrivateRouter from "./PrivateRouter";
import AuthRouter from "./AuthRouter";
import PublicRouter from "./PublicRouter";
import NoFound from "../pages/NoFound";
import { useContext } from "react";
import User from "../context/userContext";
import Package from "../pages/Package";

const AppRouter = () => {
  const { log, setLog } = useContext(User);
  if (localStorage.getItem("jwtToken")) {
    setLog(true);
  }
  return (
    <Router>
      <Switch>
        <PublicRouter path="/auth" component={AuthRouter} log={log} />
        <PrivateRouter exact path="/" component={Home} log={log} />
        <PrivateRouter exact path="/noFound" log={log} component={NoFound} />
        <PrivateRouter exact path="/package" log={log} component={Package} />
        <PrivateRouter path="*" log={log} component={NoFound} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
