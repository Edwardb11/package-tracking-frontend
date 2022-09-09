import React, { useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import TableInfo from "../components/TableInfo";
import TrackingCard from "../components/TrackingCard";

const Tracking = () => {
  const [viewForm, setViewForm] = useState(false);

  const handleTracking = (e) => {
    e.preventDefault();
    setViewForm(true);
  };

  return (
    <>
      <NavBar />
      <div className="py-20 bg-white">
        <div className="flex flex-col px-8 mx-auto space-y-12 max-w-7xl xl:px-12">
          <div className="relative">
            <h2 className="w-full text-3xl font-bold text-center sm:text-4xl md:text-5xl">
              {" "}
              Seguimiento de paquetes
            </h2>
            <p className="w-full py-8 mx-auto -mt-2 text-lg text-center text-gray-700 intro sm:max-w-3xl">
              En esta sección podrás darle seguimiento a tus paquetes, solo
              necesitas colocar el codigo de tracking de su paquete para luego
              obtener información sobre el estado de su paquete.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-14 sm:px-6 xl:px-12">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <form
            onSubmit={handleTracking}
            className="flex w-full max-w-md flex-col items-center space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3"
          >
            <input
              type="email"
              required=""
              className="w-full rounded-md border bg-gray-50 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Tracking UPS "
              defaultValue=""
            />
            <button
              type="submit"
              className="w-full rounded-md border border-blue-500 bg-blue-500 py-2 px-6 text-white transition hover:border-blue-600 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-blue-500 disabled:hover:bg-blue-500 sm:max-w-max"
            >
              Buscar
            </button>
          </form>
        </div>
      </div>

      {viewForm && (
        <>
          <div className="mx-96 text-center">
            <div className="flex flex-col mx-auto space-y-12 max-w-7xl xl:px-12">
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setViewForm(!viewForm)}
                  className="text-white justify-center b-6 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                  Ocultar
                </button>
              </div>
            </div>
          </div>
          <TrackingCard />{" "}
        </>
      )}
      <TableInfo />

      <Footer />
    </>
  );
};

export default Tracking;
