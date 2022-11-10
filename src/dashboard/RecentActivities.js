import React from "react";
import useGetLasState from "../hooks/useGetLastState";
import convertDate from "../utils/convertDate";

const RecentActivities = () => {
  const data = useGetLasState();
  const state = data.state;
  return (
    <>
      <section className="flex flex-wrap py-1  mt-24">
        <div className="w-8/12  xl:w-8/12 xl:mb-0 px-4 mx-auto ">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
            <div className="rounded-t mb-0 px-4 py-3 border-0">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                  <h3 className="font-semibold text-base text-blueGray-700">
                    Actividades recientes
                  </h3>
                </div>
                <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                  <button className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                    TOP 10
                  </button>
                </div>
              </div>
            </div>
            <div className="block w-full overflow-x-auto">
              <table className="items-center bg-transparent w-full border-collapse ">
                <thead>
                  <tr className="bg-indigo-300 text-white">
                    <th className="px-6 align-middle border border-solid py-3  text-md  border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      ID
                    </th>
                    <th className="px-6 align-middle border border-solid py-3  text-md  border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Personal
                    </th>
                    <th className="px-6 align-middle border border-solid py-3  text-md  border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Rol
                    </th>
                    <th className="px-6 align-middle border border-solid py-3  text-md  border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Actividad
                    </th>
                    <th className="px-6 align-middle border border-solid py-3  text-md  border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Paquete
                    </th>
                    <th className="px-6 align-middle border border-solid py-3  text-md  border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Fecha
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {state.map((item, key) => {
                    return (
                      <tr key={key} className=" border-b text-sm text-gray-600">
                        <td className=" px-6 p-2 border-r text-md whitespace-nowrap p-4">
                          {item?.personal?.id_personal}
                        </td>
                        <td className=" px-6 p-2 border-r text-md whitespace-nowrap p-4">
                          {item?.personal?.id_personal !== 0
                            ? `${item?.personal?.nombres}  ${item?.personal?.apellidos}`
                            : "CLIENTE"}
                        </td>
                        <td className=" px-6 p-2 border-r text-md whitespace-nowrap p-4">
                          {item?.personal?.id_personal !== 0
                            ? `${item?.personal?.roles[0]?.nombre}`
                            : "CLIENTE"}
                        </td>
                        <td className=" px-6 p-2 border-r text-md whitespace-nowrap p-4">
                          {item?.estado?.nombre}
                        </td>
                        <td className=" px-6 p-2 border-r text-md whitespace-nowrap p-4">
                          {item?.id_paquetes}
                        </td>
                        <td className=" px-6 p-2 border-r text-md whitespace-nowrap p-4">
                          {convertDate(item?.creado)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="relative sm:w-full mx-auto md:w-1/5 xl:w-1/5 lg:w-1/5 2xl:w-1/5  ">
        </div>
      </section>
    </>
  );
};

export default RecentActivities;
