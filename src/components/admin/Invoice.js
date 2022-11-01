import React, { useState } from "react";
import usePendingInvoice from "../../hooks/usePendingInvoice";
import ProceedInvoice from "./ProceedInvoice";

const Invoice = () => {
  const { data, setData } = usePendingInvoice();
  const state = data?.data;
  const [getTracking, setGetTracking] = useState({
    view: false,
    tracking: "",
    lastState: "",
  });
  return (
    <div className=" w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-24">
      <div className="relative  flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
        <div className="block w-full overflow-x-auto">
          <table className="items-center bg-transparent w-full border-collapse ">
            <thead>
              <tr className="bg-gray-700 text-white">
                <th className="px-6 align-middle border border-solid border-blueGray-100 py-3  text-md  border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Tracking
                </th>
                <th className="px-6  align-middle border border-solid border-blueGray-100 py-3 text-md   border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Nombre
                </th>
                <th className="px-6  align-middle border border-solid border-blueGray-100 py-3 text-md   border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Peso
                </th>

                <th className="px-6  align-middle border border-solid border-blueGray-100 py-3 text-md   border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Buscar
                </th>
                <th className="px-6  align-middle border border-solid border-blueGray-100 py-3 text-md   border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Destino
                </th>
                <th className="px-6  align-middle border border-solid border-blueGray-100 py-3 text-md   border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Facturar
                </th>
              </tr>
            </thead>

            <tbody>
              {state?.map((item, key) => {
                return (
                  <tr key={key} className=" border-b text-sm text-gray-600">
                    <td className=" px-6 p-2 border-r text-md whitespace-nowrap p-4">
                      {item?.paquete?.id_paquete}
                    </td>
                    <td className=" px-6 p-2 border-r text-md whitespace-nowrap p-4">
                      {item?.paquete?.nombre}
                    </td>
                    <td className=" px-6 p-2 border-r text-md whitespace-nowrap p-4">
                      {item?.paquete.peso} LB
                    </td>

                    <td className=" px-6 p-2 border-r text-md whitespace-nowrap p-4">
                      {item?.paquete?.ubicacion}
                    </td>
                    <td className=" px-6 p-2 border-r text-md whitespace-nowrap p-4">
                      {item?.paquete?.usuario_finale?.ubicacion}
                    </td>
                    <td className=" px-6 p-2 border-r text-md whitespace-nowrap p-4">
                      <button
                        onClick={() =>
                          setGetTracking({
                            view: !getTracking.view,
                            tracking: item?.paquete.id_paquete,
                            lastState: item.id_estado,
                          })
                        }
                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                        Facturar
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {state.length === 0 && (
          <div className="flex justify-center text-red-900 font-bold">
            <h2 className=" px-6 p-2  text-md whitespace-nowrap p-4">
              No hay paquetes pendiente de facturas.
            </h2>
          </div>
        )}
      </div>

      {getTracking.view && (
        <ProceedInvoice
          tracking={getTracking.tracking}
          lastState={getTracking.lastState}
          setShowModals={setGetTracking}
          showModal={getTracking.view}
          setData={setData}
        />
      )}
    </div>
  );
};

export default Invoice;
