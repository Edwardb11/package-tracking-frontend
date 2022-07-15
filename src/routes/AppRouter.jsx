import React, { useState,useEffect } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "../pages/Home";
import PrivateRouter from "./PrivateRouter";

import AuthRouter from "./AuthRouter";
import PublicRouter from "./PublicRouter";
import { store } from "../store/store";

const AppRouter = () => {
  const state = store.getState();
  const [log, setLog] = useState(false);
console.log(state.payload.login);
  useEffect(() => {
      setLog(state.payload.login)
  }, [state])
  
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
