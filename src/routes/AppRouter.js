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
import Tracking from "../pages/TrackingUPS";
import MyPackages from "../pages/MyPackages";
import DecodeToken from "../hooks/DecodeToken";
import PackagePay from "../pages/PackagePay";
import PackageInvoice from "../pages/PackageInvoice";
import AdminView from "../admin/AdminView";

import Staff from "../admin/Staff";
import RegisterStaff from "../admin/RegisterStaff";

const AppRouter = () => {
  const { log, setLog } = useContext(User);
  const token = sessionStorage.getItem("jwtToken");
  if (token) {
    setLog(true);
    DecodeToken(token);
  }
  return (
    <Router>
      <Switch>
        <PublicRouter path="/auth" component={AuthRouter} log={log} />{" "}
        <PrivateRouter exact path="/" component={Home} log={log} />{" "}
        <PrivateRouter exact path="/NoFound" log={log} component={NoFound} />{" "}
        <PrivateRouter exact path="/faq" log={log} component={Faq} />{" "}
        <PrivateRouter exact path="/about" log={log} component={About} />{" "}
        <PrivateRouter exact path="/package" log={log} component={Package} />{" "}
        <PrivateRouter exact path="/tracking" log={log} component={Tracking} />{" "}
        <PrivateRouter
          exact
          path="/packagePayment/:id"
          log={log}
          component={PackagePay}
        />{" "}
        <PrivateRouter
          exact
          path="/packageInvoice/:id"
          log={log}
          component={PackageInvoice}
        />{" "}
        <PrivateRouter
          exact
          path="/myPackages"
          log={log}
          component={MyPackages}
        />{" "}
        {/* ADMIN */}
        <PrivateRouter
          exact
          path="/admin"
          log={log}
          component={AdminView}
        />{" "}
        <PrivateRouter
          exact
          path="/admin/registerStaff"
          log={log}
          component={RegisterStaff}
        />{" "}
        <PrivateRouter
          exact
          path="/admin/staff"
          log={log}
          component={Staff}
        />{" "}
        {/* 404 */}
        <PrivateRouter path="*" log={log} component={NoFound} />
      </Switch>{" "}
    </Router>
  );
};

export default AppRouter;
