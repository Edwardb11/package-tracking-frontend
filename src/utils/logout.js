import axios from "axios";
import { url } from "../api/api";
import setAuthorizationToken from "./setAuthorizationToken";

export const logout = ({setLog}) => {
    axios
      .delete(`${url}/logout`)
      .then(
        setAuthorizationToken(false),
        sessionStorage.removeItem("jwtToken"),
        );
        setLog(false)

  };