import React from "react";
import useGetLasState from "../hooks/useGetLastState";
import convertDate from "../utils/convertDate";
const Table = () => {
  const data = useGetLasState();
  const state = data.state;
  return (
    <div className="block w-full overflow-x-auto">
      <table className="items-center bg-transparent w-full border-collapse ">
        <thead>
          <tr className=" bg-indigo-500 text-white">
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
  );
};

export default Table;
