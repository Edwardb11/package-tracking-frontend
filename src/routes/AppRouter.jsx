import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import Home from "../pages/Home";
import PrivateRouter from "./PrivateRouter";
import AuthRouter from "./AuthRouter";
import PublicRouter from "./PublicRouter";
import NoFound from "../pages/NoFound";

const AppRouter = () => {
  const [log, setLog] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("jwtToken")) {
      setLog(true);
    } else {
      setLog(false);
    }
  }, []);
  return (
    <Router>
      <Switch>
        <PublicRouter path="/auth" component={AuthRouter} log={log} />
        <PrivateRouter exact path="/" log={log} component={Home} />
        <PrivateRouter exact path="/NoFound" log={log} component={NoFound} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
