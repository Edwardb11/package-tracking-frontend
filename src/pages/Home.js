import React, { useState, useEffect, useContext } from "react";
import jwt_decode from "jwt-decode";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import User from "../context/userContext";
import LandingPage from "../components/LandingPage";
import Footer from "../components/Footer";

const Home = () => {
  const [token, setToken] = useState("");
  const { user, setUser } = useContext(User);

  useEffect(() => {
    let isEmpty = JSON.stringify(user) === "{}";
    if (isEmpty) {
      const token = localStorage.getItem("jwtToken");
      setToken(token);
      const decoded = jwt_decode(token);
      return setUser({
        name: decoded.name,
        email: decoded.email,
        userId: decoded.userId,
        sexo: decoded.sexo,
      });
    } else {
      return () => {};
    }
  }, [user,setUser]);

  return (
    <div>
      <NavBar />
      <LandingPage/>
      <Footer/>
    </div>
  );
};

export default Home;
