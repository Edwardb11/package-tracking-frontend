import React, { useContext, useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Imagen from "../components/Imagen";
import User from "../context/userContext";
import { Auth, AuthAdmin } from "../utils/auth";

const Login = ({ admin }) => {
  const { setLog } = useContext(User);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [active, setActive] = useState("");

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
  const history = useHistory();
  const client = "/auth/login";
  const admins = "/auth/admin";

  useEffect(() => {
    if (history.location.pathname === admins) {
      setActive(true);
    } else {
      setActive(false);
    }

    return () => {};
  }, [history]);

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "@import url('https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css')",
        }}
      />
      <div className="min-w-screen min-h-screen bg-teal-300 flex items-center justify-center px-5 py-5">
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
                    className={`flex justify-center w-full px-6 py-3 rounded-md md:w-auto md:mx-2  focus:outline-none ${
                      !active
                        ? `text-white bg-blue-500`
                        : `text-blue-500 border border-blue-500`
                    }`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>

                    <span className="mx-2">Usuarios</span>
                  </Link>

                  <Link
                    to={admins}
                    className={`flex justify-center w-full px-6 py-3 rounded-md md:w-auto md:mx-2 focus:outline-none ${
                      active
                        ? `text-white bg-blue-500`
                        : `text-blue-500 border border-blue-500`
                    }`}>
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                      />
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
