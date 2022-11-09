import React from "react";
import Card from "./Card";

const RecentActivities = () => {
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
                  <tr>
                    <th className=" px-6 p-2 border-r text-md whitespace-nowrap p-4">
                      /argon/
                    </th>
                    <td className=" px-6 p-2 border-r text-md whitespace-nowrap p-4">
                      4,569
                    </td>
                    <td className=" px-6 p-2 border-r text-md whitespace-nowrap p-4">
                      340
                    </td>
                    <td className=" px-6 p-2 border-r text-md whitespace-nowrap p-4">
                      <i className="fas fa-arrow-up text-emerald-500 mr-4" />
                      46,53%
                    </td>
                    <td className=" px-6 p-2 border-r text-md whitespace-nowrap p-4">
                      <i className="fas fa-arrow-up text-emerald-500 mr-4" />
                      46,53%
                    </td>
                    <td className=" px-6 p-2 border-r text-md whitespace-nowrap p-4">
                      <i className="fas fa-arrow-up text-emerald-500 mr-4" />
                      46,53%
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          </div>
          <div className="flex w-1/5  ">
            <Card title={` Ultimo paquete `} total="11" key={"1"}/>
        </div>
      </section>
    </>
  );
};

export default RecentActivities;
