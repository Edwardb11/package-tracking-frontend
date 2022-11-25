import React, { useContext } from "react";
import User from "../context/userContext";
import Dashboard from "../admin/Dashboard";
import AdminPackage from "../admin/AdminPackage";
import AdminDelivery from "../admin/AdminDelivery";
import Tracking from "./TrackingUPS";

const Home = () => {
  const { user } = useContext(User);
  const rol = user?.rol;
  if (rol === undefined) {
    return (
      <div>
        <Tracking />
      </div>
    );
  }
  if (
    rol[0]?.id_roles === 1 ||
    rol[1]?.id_roles === 1 ||
    rol[2]?.id_roles === 1
  ) {
    return (
      <div>
        <Dashboard />
      </div>
    );
  }
  if (
    rol[0]?.id_roles === 2 ||
    rol[1]?.id_roles === 2 ||
    rol[2]?.id_roles === 2
  ) {
    return (
      <div>
        <AdminPackage />
      </div>
    );
  }
  if (
    rol[0]?.id_roles === 3 ||
    rol[1]?.id_roles === 3 ||
    rol[2]?.id_roles === 3
  ) {
    return (
      <div>
        <AdminDelivery />
      </div>
    );
  }
};

export default Home;
