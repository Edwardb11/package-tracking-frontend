import React from "react";
import TrackingForms from "./client/TrackingForms";
import QuickAccess from "./QuickAccess";

const TrackingPublic = () => {
  return (
    <>
      <QuickAccess />
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
        <TrackingForms />
      </div>
    </>
  );
};

export default TrackingPublic;
