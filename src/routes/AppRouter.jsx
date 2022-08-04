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
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import About from "../pages/About";

const AppRouter = () => {
  const { log, setLog } = useContext(User);
  if (localStorage.getItem("jwtToken")) {
    setLog(true);
  }
  return (
    <Router>
      <NavBar />
      <Switch>
        <PublicRouter path="/auth" component={AuthRouter} log={log} />
        <PrivateRouter exact path="/" component={Home} log={log} />
        <PrivateRouter exact path="/NoFound" log={log} component={NoFound} />
        <PrivateRouter exact path="/faq" log={log} component={Faq} />
        <PrivateRouter exact path="/about" log={log} component={About} />
        <PrivateRouter path="*" log={log} component={NoFound} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default AppRouter;
