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

  // console.log(data );
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
                  Proceder al pago
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
                    </td>
                    <td className="py-4 px-6 border-b border-grey-light">
                      <Link to={`/payment/${items.facturas[0]?.id_factura}`}>
                      <button
                        className={`text-white  font-bold py-2 px-4 rounded inline-flex items-center 
                        ${
                          items.facturas[0]?.id_factura == null
                            ? " bg-blue-300  hover:bg-blue-200 cursor-not-allowed "
                            : " bg-blue-500  cursor-pointer  hover:bg-blue-600"
                        }
                        `}
                        disabled={items.facturas[0]?.id_factura == null}
                      >
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
                            d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                          />
                        </svg>
                        <span>
                          Pagar factura {items.facturas[0]?.id_factura || 0}
                          
                        </span>
                      </button>
                      </Link>

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
