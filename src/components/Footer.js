import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer bg-gray-100 relative pt-1 border-b-2 border-blue-700">
      <div className="container mx-auto px-6">
        <div className="sm:flex sm:mt-8">
          <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
            <div className="flex flex-col">
              <span className="font-bold text-gray-700 uppercase mb-2">
                Seguimiento de paquetes
              </span>
              <span className="my-2">
                <Link className="text-blue-700  text-md hover:text-blue-500">
                  Seguimiento
                </Link>
              </span>
              <span className="my-2">
                <Link className="text-blue-700  text-md hover:text-blue-500">
                  Agregar
                </Link>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">
                FAQ
              </span>

              <span className="my-2">
                <Link to="/faq" className="text-blue-700  text-md hover:text-blue-500"> 
                  Preguntas frecuentes
                </Link>
              </span>
              <span className="my-2">
                <Link className="text-blue-700  text-md hover:text-blue-500">
                  Soporte
                </Link>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">
                Acerca de nosotros
              </span>
              <span className="my-2">
                <Link to="/about" className="text-blue-700  text-md hover:text-blue-500">
                ¿Quiénes somos?
                </Link>
              </span>

            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6">
        <div className="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
          <div className="sm:w-2/3 text-center py-6">
            <p className="text-sm  font-bold mb-2">
              © 2022 Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
