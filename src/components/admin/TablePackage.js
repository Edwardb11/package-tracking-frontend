import React, { useEffect, useState } from "react";
import useGetPackage from "../../hooks/useGetPackage";

const TablePackage = () => {
  const { data } = useGetPackage();
  const state = data.package;
  const [filters, setFilter] = useState([]);

  // JavaScript DOM to access the selected value of the select field

  const $select = document.getElementById("select");
  const [Index, setIndex] = useState(0);

  //  // Object list with the basic information of the order, going through all this information through an index
  const changeData = (Index) => {
    const Lorem = [];

    // console.log("aa");
    for (const x in state) {
      if (Index === state[x].id_estado) {
        for (const key in state[x]) {
          if (Object.hasOwnProperty.call(state[x], key)) {
            const element = state[x];
            Lorem.push(element);
          }
        }
      }
    }
    setFilter(Lorem);
  };
  // useEffect to detect when order index changes
  useEffect(() => {
    changeData(Index);
    return () => {};
  }, [Index]);

  let result = filters.filter((item, index) => {
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
                  setIndex(
                    changeData(
                      parseInt($select.options[$select.selectedIndex].value)
                    )
                  );
                }}>
                <option value="none" className="selected disabled hidden">
                  DEFECTO
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
          </div>
        </div>

        <div className="block w-full overflow-x-auto">
          <table className="items-center bg-transparent w-full border-collapse ">
            <thead>
              <tr>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3  text-md  border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Tracking
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-md   border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Nombre
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-md   border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Peso
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-md  border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Destino
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-md   border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Estado
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-md   border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Actualizar estado
                </th>
              </tr>
            </thead>

            <tbody>
              {result.map((item) => {
                return (
                  <tr>
                    <td className="border-t-0 px-6  border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {item?.id_estado}
                    </td>
                    <td className="border-t-0 px-6  border-l-0 border-r-0 text-xs whitespace-nowrap p-4"></td>
                    <td className="border-t-0 px-6  border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      CAMBIAR{" "}
                    </td>
                    <td className="border-t-0 px-6  border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      CAMBIAR{" "}
                    </td>
                    <td className="border-t-0 px-6  border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      CAMBIAR{" "}
                    </td>
                    <td className="border-t-0 px-6  border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <button className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Actualizar
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
