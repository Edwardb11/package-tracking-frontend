import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Imagen from "../components/Imagen";
import User from "../context/userContext";
import { Auth, AuthAdmin } from "../utils/auth";

const Login = ({ admin }) => {
  console.log(admin);
  const { setLog } = useContext(User);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const Validate = async (e) => {
    e.preventDefault();
    if (admin) {
      AuthAdmin(email, password, setLog);
    } else {
      Auth(email, password, setLog);
    }
  };

  const client = "/auth/login";
  const admins = "/auth/admin";

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
          style={{ maxWidth: 1000 }}>
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
              <div className="mt-6 mb-4">
                <div className="mt-3 md:flex md:items-center md:-mx-2">
                  <Link
                    to={client}
                    className="flex justify-center w-full px-6 py-3 text-white bg-blue-500 rounded-md md:w-auto md:mx-2 focus:outline-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2">
                      <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>

                    <span className="mx-2">Usuarios</span>
                  </Link>

                  <Link
                    to={admins}
                    className="flex justify-center w-full px-6 py-3 mt-4 text-blue-500 border border-blue-500 rounded-md md:mt-0 md:w-auto md:mx-2 dark:border-blue-400 dark:text-blue-400 focus:outline-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2">
                      <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>

                    <span className="mx-2">Admin</span>
                  </Link>
                </div>
              </div>
              <form onSubmit={Validate} className="text-gray-700">
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
                        type="email"
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
                {!admin && (
                  <div className="w-full px-3 mb-5 text-center text-sm">
                    ¿No tienes cuenta?
                    <Link to="/auth/register" className="text-indigo-600">
                      {" "}
                      Registrate
                    </Link>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
