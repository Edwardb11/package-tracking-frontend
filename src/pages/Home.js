import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { Link, useHistory } from "react-router-dom";
import NoFound from "./NoFound";

const Home = () => {
  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();
  useEffect(() => {
    refreshToken();
  });
  const refreshToken = async () => {
    try {
      const token = localStorage.getItem("jwtToken");
      setToken(token);
      const decoded = jwt_decode(token);
      setName(decoded.name);
      setEmail(decoded.email);
      setUserId(decoded.userId);
    } catch (error) {
      if (error.response) {
        history.push("/");
      }
    }
  };

  return (
    <div>
      Bienvenido NOMBRE: {name} EMAIL-{email} USERID-{userId}
    <Link to={NoFound}>No FOUND</Link>
    </div>
  );
};

export default Home;
