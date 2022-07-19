import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Imagen from "../components/Imagen";
import Swal from "sweetalert2";
import axios from "axios";
import setAuthorizationToken from "../utils/setAuthorizationToken";
import { url } from "../api/api";
import User from "../context/userContext";

const Login = () => {
  const { setLog } = useContext(User);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const Auth = async (e) => {
    e.preventDefault();
    if (email.trim() === "") {
      Swal.fire({
        icon: "error",
        title: "Correo electrónico inválido",
        text: "Por favor introduzca un correo válido.",
        showConfirmButton: true,
      });
      return;
    }

    if (password.trim().length < 2) {
      Swal.fire({
        icon: "error",
        title: "Contraseña débil",
        text: "La contraseña debe ser mayor de 6 caracteres.",
        showConfirmButton: true,
      });
      return;
    }
    try {
      await axios
        .post(`${url}/login`, {
          correo_electronico: email,
          contrasena: password,
        })
        .then((res) => {
          console.log(res.data.accessToken);
          const token = res.data.accessToken;
          localStorage.setItem("jwtToken", token);
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
              }, 100);
            },
            willClose: () => {
              clearInterval(timerInterval);
            },
          });
          setInterval(() => {
            setLog(true);
          }, 2000);
        })
        .catch((error) => {
          if (error.response) {
            Swal.fire({
              icon: "error",
              title: "¡Ups! Ha ocurrido un error",
              text: "Ha ocurrido un error al registrar a un nuevo usuario, intente más tarde.",
              showConfirmButton: true,
            });
            console.log(error);
          }
        });
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.msg);
      }
    }
  };
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "@import url('https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css')",
        }}
      />
      <div className="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5">
        <div
          className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden"
          style={{ maxWidth: 1000 }}
        >
          <div className="md:flex w-full">
            <Imagen />
            <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
              <div className="text-center mb-10">
                <h1 className="font-bold text-3xl text-gray-900 ">
                  {" "}
                  Iniciar sesión
                </h1>
                <p>Ingrese su información para iniciar sesión</p>
              </div>
              <form onSubmit={Auth} className="text-gray-700">
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <label htmlFor="" className="text-sm font-semibold px-1">
                      Correo Electrónico
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-email-outline text-gray-400 text-lg" />
                      </div>
                      <input
                        type="text"
                        value={email}
                        onChange={handleEmail}
                        required
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="johnsmith@example.com"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-12">
                    <label htmlFor="" className="text-sm font-semibold px-1">
                      Contraseña
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-lock-outline text-gray-400 text-lg" />
                      </div>
                      <input
                        type="password"
                        value={password}
                        onChange={handlePassword}
                        required
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="************"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <button className="block w-full uppercase max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
                      Inicia sesión
                    </button>
                  </div>
                </div>
                <div className="w-full px-3 mb-5 text-center text-sm">
                  ¿No tienes cuenta?
                  <Link to="/auth/register" className="text-indigo-600">
                    {" "}
                    Registrate
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
