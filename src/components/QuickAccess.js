import React, { useContext } from "react";
import { Link } from "react-router-dom";
import User from "../context/userContext";

const QuickAccess = () => {
  const { log } = useContext(User);

  return (
    <nav class="flex flex-col  sm:flex-row  sm:justify-between py-4 px-6 bg-gray-800 shadow  shadow-lg sm:items-baseline w-full">
      <div className="flex">
        <Link
          className=" font-bold text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          to="/landingPage">
          Inicio
        </Link>

        <Link
          className=" font-bold text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          to="/trackingPublic">
          Seguimiento
        </Link>
      </div>
      <div>
        {log ? (
          <>
            {" "}
            <Link
              to="/auth/login"
              className="text-white font-bold  px-5 py-2.5 text-center mr-2 mb-2">
              {" "}
              Pagina principal
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/auth/login"
              className="text-white font-bold  px-5 py-2.5 text-center mr-2 mb-2">
              {" "}
              Iniciar session
            </Link>

            <Link
              to="/auth/register"
              className="font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800  rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
              Registrarse
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default QuickAccess;
