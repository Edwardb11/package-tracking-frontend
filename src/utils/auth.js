import axios from "axios";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import { url } from "../api/api";
import setAuthorizationToken from "./setAuthorizationToken";

export const Auth = async (email, password, setLog) => {
  if (email.trim() === "") {
    Swal.fire({
      icon: "error",
      title: "Correo electrónico inválido",
      text: "Por favor introduzca un correo válido.",
      showConfirmButton: true,
    });
    return;
  }

  if (password === "") {
    Swal.fire({
      icon: "error",
      title: "Error!",
      text: "La contraseña es obligatoria",
      showConfirmButton: true,
    });
    return;
  }
  try {
    await axios
      .post(`${url}/login`, {
        correo_electronico: email,
        contraseña: password,
      })
      .then((res) => {
        // console.log(res.data.accessToken);
        const token = res.data.accessToken;
        sessionStorage.setItem("jwtToken", token);
        Cookies.get("jwtToken");
        Cookies.set("jwtToken", token);
        setAuthorizationToken(token);
        let timerInterval;
        Swal.fire({
          icon: "success",
          title: "¡Inicio de sesión exitoso!",
          text: "Espere mientras cargan sus datos.",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
            const b = Swal.getHtmlContainer().querySelector("b");
            timerInterval = setInterval(() => {
              b.textContent = Swal.getTimerLeft();
            }, 2000);
          },
          willClose: () => {
            clearInterval(timerInterval);
            setLog(true);
          },
        });
      })
      .catch((error) => {
        if (error.response.status === 400) {
          Swal.fire({
            icon: "error",
            title: "¡Error!",
            text: error.response.data.msg,
            showConfirmButton: true,
          });
          console.log(error);
          setLog(false);
        } else if (error.response.status === 404) {
          Swal.fire({
            icon: "error",
            title: "¡Error!",
            text: error.response.data.msg,
            showConfirmButton: true,
          });
          setLog(false);
        } else if (error.response) {
          Swal.fire({
            title: "¡Error!",
            text: "Lo sentimos, estamos teniendo problemas para iniciar su sesión. Vuelva a intentarlo mas tarde.",
            icon: "error",
            confirmButtonText: "OK",
          });
          setLog(false);
        }
      });
  } catch (error) {
    if (error.response) {
      Swal.fire({
        title: "¡Error!",
        text: "Lo sentimos, estamos teniendo problemas para iniciar su sesión. Vuelva a intentarlo mas tarde.",
        icon: "error",
        confirmButtonText: "OK",
      });
      setLog(false);
    }
  }
};

export const logout = async (user, setLog, setUser) => {
  try {
    await axios
      .delete(`${url}/logout/${user.userId}`)
      .then(
        () => setAuthorizationToken(false),
        sessionStorage.removeItem("jwtToken"),
        Cookies.remove("jwtToken")
      );
    // console.log(data);
    setLog(false);
    setUser({});
  } catch (error) {
    console.log(error);
  }
};
