import React, { useState } from "react";
import ProceedSend from "../components/admin/ProceedSend";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import usePendingShopping from "../hooks/usePendingShopping";

const Delivery = () => {
  const { data, setData } = usePendingShopping();
  const state = data?.data;

  const [getTracking, setGetTracking] = useState({
    view: false,
    data: {},
  });
  return (
    <>
      <NavBar />
      <div className="py-20 bg-white">
        <div className="flex flex-col px-8 mx-auto space-y-12 max-w-7xl xl:px-12">
          <div className="relative">
            <h2 className="w-full text-3xl font-bold text-center sm:text-4xl md:text-5xl">
              {" "}
              Paquetes pendiente de envio
            </h2>
          </div>
        </div>
      </div>
      <div className=" w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-2">
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
                    Destino
                  </th>
                  <th className="px-6  align-middle border border-solid border-blueGray-100 py-3 text-md   border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Recibira
                  </th>
                  <th className="px-6  align-middle border border-solid border-blueGray-100 py-3 text-md   border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Contacto
                  </th>
                  <th className="px-6  align-middle border border-solid border-blueGray-100 py-3 text-md   border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Enviar
                  </th>
                </tr>
              </thead>

              <tbody>
                {state?.map((item, key) => {
                  if (item.activo) {
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
                          {item?.paquete?.usuario_finale?.ubicacion}
                        </td>

                        <td className=" px-6 p-2 border-r text-md whitespace-nowrap p-4">
                          {item?.paquete?.usuario_finale?.nombres}{" "}
                          {item?.paquete?.usuario_finale?.apellidos}
                        </td>
                        <td className=" px-6 p-2 border-r text-md whitespace-nowrap p-4">
                          {item?.paquete?.usuario_finale?.celular}
                        </td>
                        <td className=" px-6 p-2 border-r text-md whitespace-nowrap p-4">
                          <button
                            onClick={() =>
                              setGetTracking({
                                view: !getTracking.view,
                                data: item,
                              })
                            }
                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                            Enviar
                          </button>
                        </td>
                      </tr>
                    );
                  } else {
                    return <></>;
                  }
                })}
              </tbody>
            </table>
          </div>
        </div>
        {getTracking.view && (
          <ProceedSend
            data={getTracking.data}
            setShowModals={setGetTracking}
            showModal={getTracking.view}
            setData={setData}
            delivered={false}
          />
        )}
      </div>
      <Footer />
    </>
  );
};

export default Delivery;
