import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import Home from "../pages/Home";
import PrivateRouter from "./PrivateRouter";
import AuthRouter from "./AuthRouter";
import PublicRouter from "./PublicRouter";
import NoFound from "../pages/NoFound";

const AppRouter = () => {
  const [log, setLog] = useState(null);
  const Auth = localStorage.getItem("jwtToken");
  useEffect(() => {
    if (Auth) {
      return () => setLog(true);
    }
    return () => setLog(false);
  }, [Auth]);

  return (
    <Router>
      <Switch>
        <PublicRouter path="/auth" component={AuthRouter} log={log} />
        <PrivateRouter exact path="/" component={Home} log={log} />
        <PrivateRouter exact path="/NoFound" log={log} component={NoFound} />
        <PrivateRouter path="*" log={log} component={NoFound} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
