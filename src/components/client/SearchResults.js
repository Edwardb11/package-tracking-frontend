import React from "react";
import ResultsActivities from "./ResultsActivities";
import ResultsBody from "./ResultsBody";
import ResultsTitles from "./ResultsTitles";

const SearchResults = ({ data }) => {
  /* Destructuring the data from the API. */
  const namePackagfe = data?.package[0]?.nombre;
  const tracking = data?.package[0]?.id_paquete;
  const amount = data?.package[0]?.cantidad;
  const name = data?.package[0]?.cliente?.nombres;
  const nameEnd = data?.package[0]?.usuario_finale?.nombres;
  const lastName = data?.package[0]?.cliente?.apellidos;
  const lastNameEnd = data?.package[0]?.usuario_finale?.apellidos;
  const fullName = `${name} ${lastName}`;
  const fullNameEnd = `${nameEnd} ${lastNameEnd}`;

  const weight = data?.package[0]?.peso;
  const send = data?.package[0]?.ubicacion;
  const destiny = data?.package[0]?.usuario_finale.ubicacion;

  return (
    <div className="container mx-auto  py-20">
      <div>
        <div className="bg-white relative shadow-lg rounded-lg  md:w-1/7  lg:w-4/6 xl:w-4/6 mx-auto">
          <div className="flex justify-center">
            <img
              src="https://avatars0.githubusercontent.com/u/35900628?v=4"
              alt=""
              className="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110"
            />
          </div>
          <div className="mt-16">
            <h1 className="font-bold text-center text-3xl text-gray-900">
              {namePackagfe}
            </h1>
            <p className="text-center text-sm text-gray-400 font-medium">
              {tracking}
            </p>

            <ResultsTitles titles={["Cantidad", "Peso", "Envia", "Recibe"]} />

            <ResultsBody
              title1={amount}
              title2={weight + " LB"}
              title3={fullName}
              title4={fullNameEnd}
            />

            <div className="flex  text-gray-700 font-bold items-center bg-gray-100 ">
              <p className="  hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in text-sm text-center w-full py-3">
                Enviado desde
              </p>

              <p className="  hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in text-sm text-center w-full py-3">
                Recibir en
              </p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">
                {send}
              </p>
              <p className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">
                {destiny}
              </p>
            </div>

            <div className="w-full">
              {/*  Passing the data from the API to the component ResultsActivities. */}
              <ResultsActivities states={data?.state} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
