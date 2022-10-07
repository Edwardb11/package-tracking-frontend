import React, { useEffect, useState } from "react";
import useGetPackage from "../../hooks/useGetPackage";
import useGetStates from "../../hooks/useGetStates";

const TablePackage = () => {
  // Custom hook to get the packages
  const data = useGetPackage();

  // Custom hook to get the states
  const states = useGetStates();

  // Rename
  const state = data.package;

  // filtered state
  const [filters, setFilter] = useState([]);

  // JavaScript DOM to access the selected value of the select field
  const $select = document.getElementById("select");

  // Get ID
  const [Index, setIndex] = useState(0);

  // Function for when the state changes
  const changeData = (Index) => {
    // Temporary array to store the filtered
    const Lorem = [];
    // Get the array position matching that state ID
    for (const x in state) {
      if (Index === state[x].id_estado) {
        // Clone the result of that filter
        for (const key in state[x]) {
          if (Object.hasOwnProperty.call(state[x], key)) {
            const element = state[x];
            Lorem.push(element);
          }
        }
      }
    }
    // Set the result
    setFilter(Lorem);
  };

  // useEffect to detect when state index changes
  useEffect(() => {
    changeData(Index);
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Index]);

  // Doing another filter for duplicate entries
  const result = filters.filter((item, index) => {
    return filters.indexOf(item) === index;
  });

  return (
    <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-24">
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h2 className="font-semibold  text-blueGray-700 text-lg">
                Filtrar por estado
              </h2>
            </div>
            <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
              <select
                id="select"
                onChange={() => {
                  changeData(
                    setIndex(
                      parseInt($select.options[$select.selectedIndex].value)
                    )
                  );
                }}>
                <option value="none" className="selected disabled hidden">
                  Seleccione
                </option>
                {states.data.map((state) => {
                  return (
                    <>
                      <option value={state.id_estado}>{state.nombre}</option>
                    </>
                  );
                })}
              </select>
            </div>
          </div>
        </div>

        <div className="block w-full overflow-x-auto">
          <table className="items-center bg-transparent w-full border-collapse ">
            <thead>
              <tr>
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
                  Estado
                </th>
                <th className="px-6  align-middle border border-solid border-blueGray-100 py-3 text-md   border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Buscar
                </th>
                <th className="px-6  align-middle border border-solid border-blueGray-100 py-3 text-md   border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Destino
                </th>
                <th className="px-6  align-middle border border-solid border-blueGray-100 py-3 text-md   border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Actualizar
                </th>
              </tr>
            </thead>

            <tbody>
              {result.map((item, key) => {
                return (
                  <tr key={key}>
                    <td className="border-t-0 px-6 text-md text-blue-800 font-semibold  border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {item?.paquete.id_paquete}
                    </td>
                    <td className="border-t-0 px-6  border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {item?.paquete.nombre}
                    </td>
                    <td className="border-t-0 px-6  border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {item?.paquete.peso}
                    </td>
                    <td className="border-t-0 px-6 font-semibold bg-gray-100  border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {item?.estado?.nombre || "PENDIENTE"}
                    </td>
                    <td className="border-t-0  px-6  border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {item?.paquete?.ubicacion}
                    </td>
                    <td className="border-t-0 px-6  border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {item?.paquete?.usuario_finale?.ubicacion}
                    </td>
                    <td className="border-t-0 px-6  border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <button className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Actualizar {item?.paquete.id_paquete}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TablePackage;
