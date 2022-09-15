import React, { useContext, useEffect, useState } from "react";
import User from "../context/userContext";
import { url } from "../api/api";
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
    <>
      <div className="w-2/3 mx-auto">
        <div className="bg-white shadow-md rounded my-6">
          <table className="text-left w-full border-collapse">
            <thead>
              <tr>
                <th className="py-4 px-6 bg-grey-lightest font-bold  text-sm text-grey-dark border-b border-grey-light">
                  Tracking
                </th>
                <th className="py-4 px-6 bg-grey-lightest font-bold  text-sm text-grey-dark border-b border-grey-light">
                  Paquete
                </th>
                <th className="py-4 px-6 bg-grey-lightest font-bold  text-sm text-grey-dark border-b border-grey-light">
                  Cantidad
                </th>
                <th className="py-4 px-6 bg-grey-lightest font-bold  text-sm text-grey-dark border-b border-grey-light">
                  Peso
                </th>
                <th className="py-4 px-6 bg-grey-lightest font-bold  text-sm text-grey-dark border-b border-grey-light">
                  Costo de envio
                </th>
                <th className="py-4 px-6 bg-grey-lightest font-bold  text-sm text-grey-dark border-b border-grey-light">
                  Factura
                </th>
                <th className="py-4 px-6 bg-grey-lightest font-bold  text-sm text-grey-dark border-b border-grey-light">
                  Mas informacion
                </th>
              </tr>
            </thead>
            <tbody>
              {data.data.map((items) => {
                return (
                  <tr className="hover:bg-grey-lighter">
                    <td className="py-4 px-6 border-b border-grey-light">
                      {items.id_paquete}
                    </td>
                    <td className="py-4 px-6 border-b border-grey-light">
                      {items.nombre}
                    </td>
                    <td className="py-4 px-6 border-b border-grey-light">
                      # {items.cantidad}
                    </td>
                    <td className="py-4 px-6 border-b border-grey-light">
                      {items.peso} LB
                    </td>
                    <td className="py-4 px-6 border-b border-grey-light">
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
                        `}
                      >
                        {items.facturas[0]?.id_factura !== undefined && (
                          <Link
                            to={`/packagePayment/${items.facturas[0]?.id_factura}`}
                          >
                            <span>Pagar</span>
                          </Link>
                        )}
                        {items.facturas[0]?.id_factura === undefined && (
                          <span>No facturado</span>
                        )}
                      </button>
                    </td>
                    <td className="py-4 px-6 border-b border-grey-light">
                      <button class="border-blue-500 bg-blue-500 text-white   font-bold py-2 px-4 rounded inline-flex items-center hover:border-blue-600 hover:bg-blue-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
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
    </>
  );
};

export default PackagesTable;
