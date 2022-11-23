import React, { useState } from "react";
import useGetLasState from "../hooks/useGetLastState";
import convertDate from "../utils/convertDate";
const Table = () => {
  const data = useGetLasState();
  const state = data.state;
    // JavaScript DOM to access the selected value of the select field
    const $select = document.getElementById("select");

    // Get ID
    const [Index, setIndex] = useState(9);


    /* Filtering the data to show only the number of rows selected in the select field. */
    const filters = state.slice(0,Index)

  return (
    <>
      <div className="rounded-t mb-0 px-4 py-3 border-0">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full px-4 max-w-full flex-grow flex-1">
            <h3 className="font-semibold text-base text-blueGray-700">
              Actividades recientes
            </h3>
          </div>
          <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
            <select
              id="select"
              className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              onChange={() => {
                setIndex(
                  parseInt($select.options[$select.selectedIndex].value)
                )
              }}>
                
              <option value={3}>03</option>
              <option value={6}>06</option>
              <option selected value={9}>09</option>
              <option value={12}>12</option>
              <option value={15}>15</option>
              <option value={18}>18</option>
            </select>
          </div>
        </div>
      </div>
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
            {filters.map((item, key) =>  {
             
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
    </>
  );
};

export default Table;
