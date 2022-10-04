import React, { useContext } from "react";
import LandingPage from "../components/client/LandingPage";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import User from "../context/userContext";
import AdminView from "../admin/AdminView";

const Home = () => {
  const { user } = useContext(User);
  const rol = user?.rol;
  if (rol === undefined) {
    return (
      <div>
        <NavBar />
        <LandingPage />
        <Footer />
      </div>
    );
  }
  if (rol[0]?.id_roles === 1 || rol[1]?.id_roles) {
    return (
      <div>
        <AdminView />
      </div>
    );
  }
};

export default Home;
