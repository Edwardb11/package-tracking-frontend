import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import Home from "../pages/Home";
import PrivateRouter from "./PrivateRouter";
import AuthRouter from "./AuthRouter";
import PublicRouter from "./PublicRouter";
import NoFound from "../pages/NoFound";
import { useContext } from "react";
import User from "../context/userContext";
import Faq from "../pages/Faq";
import About from "../pages/About";
import Package from "../pages/Package";
import Tracking from "../pages/Tracking";

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
        <PrivateRouter exact path="/NoFound" log={log} component={NoFound} />
        <PrivateRouter exact path="/faq" log={log} component={Faq} />
        <PrivateRouter exact path="/about" log={log} component={About} />
        <PrivateRouter exact path="/package" log={log} component={Package} />
        <PrivateRouter exact path="/tracking" log={log} component={Tracking} />
        <PrivateRouter path="*" log={log} component={NoFound} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
