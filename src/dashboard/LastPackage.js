import React from "react";
import useFetchAPI from "../hooks/useFetchAPI";
import CardPackage from "./CardPackage";

const LastPackage = () => {
  const data = useFetchAPI("getLastSend");
  const state = data.data;
  const name =
    state[0]?.paquete?.cliente?.nombres +
    " " +
    state[0]?.paquete?.cliente?.apellidos;
  const tracking = state[0]?.paquete.id_paquete;
  const packageName = state[0]?.paquete.nombre;
  const destiny = state[0]?.paquete?.usuario_finale?.ubicacion;
  const search = state[0]?.paquete?.ubicacion;
  const cost = state[0]?.paquete.facturas[0]?.cantidad_a_pagar;
  const endUser =
    state[0]?.paquete.usuario_finale?.nombres +
    " " +
    state[0]?.paquete.usuario_finale?.apellidos;
  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className="bg-white rounded overflow-hidden shadow-lg">
        <div className="text-center p-6 bg-indigo-500 border-b">
          <div className="mt-5">
            <h1 className="border rounded-full py-2 px-4 text-base font-semibold text-gray-100">
              Ultimo paquete entregado
            </h1>
          </div>
        </div>
        <div className=" text-gray-800  mt-4 mb-4">
          <CardPackage title={"Nombre del paquete"} description={packageName} />
          <CardPackage title={"Tracking"} description={tracking} />
          <CardPackage title={"Cliente"} description={name} />
          <CardPackage title={"Buscado"} description={search} />
          <CardPackage title={"Enviado"} description={destiny} />
          <CardPackage title={"Recibido"} description={endUser} />
          <CardPackage title={"Costo "} description={cost + "$"} />
        </div>
      </div>
    </div>
  );
};

export default LastPackage;
