import React, { useContext, useEffect, useState } from "react";
import User from "../../context/userContext";
import { url } from "../../api/api";
import { Link } from "react-router-dom";

const PackagesTable = () => {
  const { user } = useContext(User);
  const userId = user.userId;
  const [data, setData] = useState({ data: [] });
  const [isEmpty, setIsEmpty] = useState(true);
  useEffect(() => {
    if (isEmpty) {
      fetch(`${url}/getPackage/${userId}`)
        .then((response) => response.json())
        .then((data) => setData(data));
      setIsEmpty(false);
    } else {
      return () => {};
    }
  }, [data, setData, isEmpty, userId]);

  // console.log(data );\
  return (
    <div className="w-full xl:w-10/12 mb-12 xl:mb-0 px-4 mx-auto ">
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
        <div className="block w-full overflow-x-auto">
          <table className="items-center bg-transparent w-full border-collapse ">
            <thead>
              <tr className="bg-gray-700 text-white">
                <th className="px-6 align-middle border border-solid py-3  text-md  border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Tracking
                </th>
                <th className="px-6 align-middle border border-solid py-3  text-md  border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Paquete
                </th>
                <th className="px-6 align-middle border border-solid py-3  text-md  border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Costo de envio
                </th>
                <th className="px-6 align-middle border border-solid py-3  text-md  border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Factura
                </th>
                <th className="px-6 align-middle border border-solid py-3  text-md  border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Mas informacion
                </th>
              </tr>
            </thead>
            <tbody>
              {data.data.map((items) => {
                return (
                  <tr className=" border-b text-sm text-gray-600">
                    <td className=" px-6 text-md   p-2 border-r whitespace-nowrap p-4">
                      {items.id_paquete}
                    </td>
                    <td className=" px-6 text-md   p-2 border-r whitespace-nowrap p-4">
                      {items.nombre}
                    </td>
                    <td className=" px-6 text-md   p-2 border-r whitespace-nowrap p-4">
                      {items.facturas[0]?.cantidad_a_pagar || "No definido"}
                      {console.log(items.facturas[0]?.id_factura === undefined)}
                    </td>
                    <td className="py-4 px-6 border-b border-grey-light">
                      <button
                        className={`text-white  font-bold py-2 px-4 rounded inline-flex items-center 
                        ${
                          items.facturas[0]?.id_factura === undefined
                            ? " bg-blue-300  hover:bg-blue-200 cursor-not-allowed "
                            : " bg-blue-500  cursor-pointer  hover:bg-blue-600"
                        }
                        `}>
                        {items.facturas[0]?.id_factura !== undefined && (
                          <Link
                            to={`/packagePayment/${items.facturas[0]?.id_factura}`}>
                            <span>Pagar</span>
                          </Link>
                        )}
                        {items.facturas[0]?.id_factura === undefined && (
                          <span>No facturado</span>
                        )}
                      </button>
                    </td>
                    <td className="py-4 px-6 border-b border-grey-light">
                      <button className="border-blue-500 bg-blue-500 text-white   font-bold py-2 px-4 rounded inline-flex items-center hover:border-blue-600 hover:bg-blue-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>

                        {/* <span> Mostrar</span> */}
                      </button>{" "}
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

export default PackagesTable;
