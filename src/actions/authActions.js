import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import { url } from '../api/api';

export function setCurrentUser(user) {
  return {
    type: "",
    user
  };
}

export function logout() {
  return dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  }
}

export function login(data) {
  return dispatch => {
    return axios.post(`${url}/login`, data).then(res => {
      const token = res.data.accesToken;
      localStorage.setItem('jwtToken', token);
      setAuthorizationToken(token);
      dispatch(setCurrentUser(token));
    });
  }
}