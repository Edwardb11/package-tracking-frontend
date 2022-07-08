import React, { useState } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "../pages/Home";
import PrivateRouter from "./PrivateRouter";


import AuthRouter from "./AuthRouter";
import PublicRouter from "./PublicRouter";

const AppRouter = () => {
  const [log, setLog] = useState(false);
  return (
    <Router>
      <Switch>
        <PublicRouter path="/auth" component={AuthRouter} log={log} />
        <PrivateRouter exact path="/" log={log} component={Home} />
      </Switch>
    </Router>
  );
};

export default AppRouter;