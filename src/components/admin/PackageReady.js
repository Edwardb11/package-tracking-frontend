import React from "react";
import usePackageReady from "../../hooks/usePackageReady";
import convertDate from "../../utils/convertDate";

const PackageReady = () => {
  const data = usePackageReady();
  const state = data.data;
  return (
    <div className="w-full xl:w-10/12 mb-12 xl:mb-0 px-4 mx-auto mt-24">
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
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
                  Entregado
                </th>
                <th className="px-6  align-middle border border-solid border-blueGray-100 py-3 text-md   border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Buscar
                </th>
                <th className="px-6  align-middle border border-solid border-blueGray-100 py-3 text-md   border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Destino
                </th>
                <th className="px-6  align-middle border border-solid border-blueGray-100 py-3 text-md   border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Costo de envio
                </th>
              </tr>
            </thead>

            <tbody>
              {state.map((item, key) => {
                return (
                  <tr key={key} className=" border-b text-sm text-gray-600">
                    <td className=" px-6 p-2 border-r text-md whitespace-nowrap p-4">
                      {item?.paquete.id_paquete}
                    </td>
                    <td className=" px-6 p-2 border-r text-md whitespace-nowrap p-4">
                      {item?.paquete.nombre}
                    </td>
                    <td className=" px-6 p-2 border-r text-md whitespace-nowrap p-4">
                      {item?.paquete.peso} LB
                    </td>
                    <td className=" px-6 p-2 border-r text-md whitespace-nowrap p-4">
                      {convertDate(item?.creado)}
                    </td>

                    <td className=" px-6 p-2 border-r text-md whitespace-nowrap p-4">
                      {item?.paquete?.ubicacion}
                    </td>
                    <td className=" px-6 p-2 border-r text-md whitespace-nowrap p-4">
                      {item?.paquete?.usuario_finale?.ubicacion}
                    </td>
                    <td className=" px-6 p-2 border-r text-md whitespace-nowrap p-4">
                      {item?.paquete?.facturas[0]?.cantidad_a_pagar} RD$
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

export default PackageReady;
