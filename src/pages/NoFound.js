import React from "react";
import { Link } from "react-router-dom";

const NoFound = () => {
  return (
    <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
      <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
        <div className="relative">
          <div className="absolute">
            <div>
              <h1 className="my-4 text-gray-800 font-bold text-2xl">
                ¡Ups! encontraste una puerta que te lleva a un lugar que no
                existe
              </h1>

              <Link
                className="cursor-pointer sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50 "
                to="/"
              >
                Página principal{" "}
              </Link>
            </div>
          </div>
          <div>
            <img src="https://i.ibb.co/G9DC8S0/404-2.png" alt="404" />
          </div>
        </div>
      </div>
      <div>
        <img src="https://i.ibb.co/ck1SGFJ/Group.png" alt="cables" />
      </div>
    </div>
  );
};

export default NoFound;
