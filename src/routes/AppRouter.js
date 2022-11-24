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

import RegisterStaff from "../admin/RegisterStaff";
import ListStaff from "../admin/ListStaff";
import Dashboard from "../admin/Dashboard";
import AdminPackage from "../admin/AdminPackage";
import AdminStaff from "../admin/AdminStaff";
import ManagePackage from "../admin/ManagePackage";
import ManageState from "../admin/ManageState";
import ListPackage from "../admin/ListPackage";
import InvoicePackage from "../admin/InvoicePackage";
import ShowInvoice from "../components/client/ShowInvoice";
import ListHistoryStaff from "../admin/ListHistoryStaff";
import Delivery from "../admin/Delivery";
import Delivered from "../admin/Delivered";
import AdminDelivery from "../admin/AdminDelivery";
import LandingPage from "../components/LandingPage";

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
        <PublicRouter path="/landingPage" component={LandingPage} />
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
          path="/showInvoice/:id"
          log={log}
          component={ShowInvoice}
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
          path="/admin/dashboard"
          log={log}
          component={Dashboard}
        />{" "}
        <PrivateRouter
          exact
          path="/admin/registerStaff"
          log={log}
          component={RegisterStaff}
        />{" "}
        <PrivateRouter
          exact
          path="/admin/listStaff"
          log={log}
          component={ListStaff}
        />{" "}
        <PrivateRouter
          exact
          path="/admin/staff"
          log={log}
          component={AdminStaff}
        />{" "}
        <PrivateRouter
          exact
          path="/admin/Package"
          log={log}
          component={AdminPackage}
        />{" "}
        <PrivateRouter
          exact
          path="/admin/PackageReady"
          log={log}
          component={ListPackage}
        />{" "}
        <PrivateRouter
          exact
          path="/admin/managePackage"
          log={log}
          component={ManagePackage}
        />{" "}
        <PrivateRouter
          exact
          path="/admin/invoicePackage"
          log={log}
          component={InvoicePackage}
        />{" "}
        <PrivateRouter
          exact
          path="/admin/statePackage/:id"
          log={log}
          component={ManageState}
        />{" "}
        <PrivateRouter
          exact
          path="/admin/listStaffOld"
          log={log}
          component={ListHistoryStaff}
        />{" "}
        <PrivateRouter
          exact
          path="/admin/delivery"
          log={log}
          component={Delivery}
        />{" "}
        <PrivateRouter
          exact
          path="/admin/packageShipped"
          log={log}
          component={Delivered}
        />{" "}
        <PrivateRouter
          exact
          path="/admin/actionsDelivery"
          log={log}
          component={AdminDelivery}
        />{" "}
        {/* 404 */}
        <PrivateRouter path="*" log={log} component={NoFound} />
      </Switch>{" "}
    </Router>
  );
};

export default AppRouter;
