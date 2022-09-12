import { useEffect, useContext } from "react";
import jwt_decode from "jwt-decode";
import User from "../context/userContext";

const DecodeToken = (token) => {
  const { user, setUser } = useContext(User);
  useEffect(() => {
    let isEmpty = JSON.stringify(user) === "{}";
    if (isEmpty) {
      const token = sessionStorage.getItem("jwtToken");
      const decoded = jwt_decode(token);
      return setUser({
        name: decoded.name,
        email: decoded.email,
        userId: decoded.clienteId || decoded.StaffId,
        sexo: decoded.sexo,
      });
    } else {
      return () => {};
    }
  }, [user, setUser]);
};
export default DecodeToken;
