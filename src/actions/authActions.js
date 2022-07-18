import axios from "axios";
import setAuthorizationToken from "../utils/setAuthorizationToken";
import { url } from "../api/api";
import { types } from "../types/types";

export function logout() {
  return (dispatch) => {
    localStorage.removeItem("jwtToken");
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  };
}

export function login(data) {
  return (dispatch) => {
    return axios.post(`${url}/login`, data).then((res) => {
      console.log(res.data.accessToken);
      const token = res.data.accessToken;
      localStorage.setItem("jwtToken", token);
      setAuthorizationToken(token);
      dispatch(setCurrentUser(res.data.id, res.data.login));
    });
  };
}

export function setCurrentUser(id, login) {
  return {
    type: types.login,
    payload: {
      id,
      login,
    },
  };
}