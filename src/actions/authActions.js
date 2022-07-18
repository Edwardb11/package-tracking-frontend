import axios from "axios";
import setAuthorizationToken from "../utils/setAuthorizationToken";
import { url } from "../api/api";
import { types } from "../types/types";
import Swal from "sweetalert2";

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
      let timerInterval;
      Swal.fire({
        icon: 'success',
        title: '¡Inicio de sesión exitoso!',
        text: 'Espere mientras cargan sus datos.',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading()
          const b = Swal.getHtmlContainer().querySelector('b')
          timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft()
          }, 100)
        },
        willClose: () => {
          clearInterval(timerInterval)
        }
      })

    }).catch((error)=>{
      if (error.response) {
        Swal.fire({
          icon: 'error',
          title: '¡Ups! Ha ocurrido un error',
          text: 'Ha ocurrido un error al registrar a un nuevo usuario, intente más tarde.',
          showConfirmButton: true,
        })
        console.log(error);
      }
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