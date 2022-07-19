import React, { useState, useEffect, useContext } from "react";
import jwt_decode from "jwt-decode";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import User from "../context/userContext";

const Home = () => {
  const [token, setToken] = useState("");
  const { setUser } = useContext(User);
  useEffect(() => {
    refreshToken();
  });
  const refreshToken = async () => {
    try {
      const token = localStorage.getItem("jwtToken");
      setToken(token);
      const decoded = jwt_decode(token);
      setUser({
        name: decoded.name,
        email: decoded.email,
        userId: decoded.userId,
      });
    } catch (error) {
      if (error.response) {
        console.log(error.response);
      }
    }
  };
  const { user } = useContext(User);

  return (
    <div>
      <NavBar />
      Bienvenido NOMBRE: {user.name} EMAIL-{user.email} USERID-{user.userId}
      <Link to="/NoFound">No FOUND</Link>
    </div>
  );
};

export default Home;
