import React from "react";
import { Redirect, Route } from "react-router-dom";

const PublicRouter = ({ log, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        log ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

export default PublicRouter;
