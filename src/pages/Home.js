import React, { useState, useEffect, useContext } from "react";
import jwt_decode from "jwt-decode";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import User from "../context/userContext";

const Home = () => {
  const [token, setToken] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [userId, setUserId] = useState("");
  const { user, setUser } = useContext(User);

  const refreshToken = async () => {
    try {
      const token = localStorage.getItem("jwtToken");
      setToken(token);
      const decoded = jwt_decode(token);
      return setUser({
        name: decoded.name,
        email: decoded.email,
        userId: decoded.userId,
        sexo: decoded.sexo,
      });
    } catch (error) {
      if (error.response) {
        console.log(error.response);
      }
    }
  };
  
  useEffect(() => {
    let isEmpty = JSON.stringify(user) === "{}";
    if (isEmpty) {
      refreshToken();
    } else {
      return () => {};
    }
  }, [user, refreshToken]);

  return (
    <div>
      <NavBar />
      Bienvenido NOMBRE: {user.name} EMAIL-{user.email} USERID-{user.userId} - sexo -{user.sexo} -
      <Link to="/NoFound">No FOUND</Link>
    </div>
  );
};

export default Home;
