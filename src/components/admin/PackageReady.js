import React from 'react'

const PackageReady = () => {
  return (
    <div className="w-full xl:w-10/12 mb-12 xl:mb-0 px-4 mx-auto mt-24">
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
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

            {/* <tbody>
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
                      {item?.paquete.peso } LB
                    </td>
                    <td className="border-t-0 px-6 font-semibold bg-gray-100  border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {item?.estado?.nombre || "PENDIENTE"}
                    </td>
                    <td className="border-t-0 px-6   border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {convertDate(item?.creado)}
                    </td>
                    <td className="border-t-0  px-6  border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {item?.paquete?.ubicacion}
                    </td>
                    <td className="border-t-0 px-6  border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {item?.paquete?.usuario_finale?.ubicacion}
                    </td>
                    <td className="border-t-0 px-6  border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <Link
                        to={`/admin/statePackage/${item?.paquete.id_paquete}`}
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Actualizar
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody> */}
          </table>
        </div>
      </div>
    </div>
  )
}

export default PackageReady