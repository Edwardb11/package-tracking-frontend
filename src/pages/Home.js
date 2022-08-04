import React, { useState, useEffect, useContext } from "react";
import jwt_decode from "jwt-decode";
import User from "../context/userContext";
import LandingPage from "../components/LandingPage";

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
  }, [user, setUser]);

  return (
    <div>
      <LandingPage />
    </div>
  );
};

export default Home;
