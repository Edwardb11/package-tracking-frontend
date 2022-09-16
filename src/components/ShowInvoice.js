import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { url } from "../api/api";
import convertDate from "../utils/convertDate";

const ShowInvoice = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    let isEmpty = JSON.stringify(data) === "{}";
    if (isEmpty) {
      axios.get(`${url}/getInvoice/${id}`).then((res) => setData(res));
    }
    return () => {};
  }, [data, id]);

  const Package = data.data?.invoice[0].paquete.nombre;
  const PackageAmount = data.data?.invoice[0].cantidad_a_pagar;
  const PackageQuantity = data.data?.invoice[0].paquete.cantidad;
  const PackageTracking = data.data?.invoice[0].id_paquete;
  const clientName = data?.data?.invoice[0]?.paquete?.cliente.nombres;
  const clientLastName = data?.data?.invoice[0]?.paquete?.cliente.apellidos;
  const clientPhone = data?.data?.invoice[0]?.paquete?.cliente.celular;
  const endUserName = data?.data?.invoice[0]?.paquete?.usuario_finale.nombres;
  const endUserLastName =
    data?.data?.invoice[0]?.paquete?.usuario_finale.apellidos;
  const endUserPhone = data?.data?.invoice[0]?.paquete?.usuario_finale.celular;
  const endUserLocation =
    data?.data?.invoice[0]?.paquete?.usuario_finale.ubicacion;

  const subTotal = PackageAmount - 100;
  return (
    <>
      <div className="flex items-center justify-center mb-10 ">
        <div className="w-3/5 bg-white shadow-lg">
          <div className="flex justify-between p-4">
            <div>
              <h1 className="text-3xl italic font-extrabold tracking-widest text-indigo-500">
                {PackageTracking}
              </h1>
              <p className="text-base">
                Si necesita saber el estado de su paquete solo pulse 👉{" "}
                <Link
                  className="outline-none bg-transprent text-xs font-bold text-blue-500 uppercase focus:outline-none"
                  to={"/tracking"}
                >
                  Seguimiento del paquete
                </Link>
              </p>
            </div>
            <div className="p-2">
              <ul className="flex">
                <li className="flex flex-col items-center p-2 border-l-2 border-indigo-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                  <span className="text-sm">www.sistemapaqueteria...</span>
                  <span className="text-sm">www.lorememhh.com</span>
                </li>
                <li className="flex flex-col p-2 border-l-2 border-indigo-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-sm">
                    4100, La Vega, Republica Dominicana.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full h-0.5 bg-indigo-500" />
          <div className="flex justify-between p-4">
            <div>
              <h6 className="font-bold">
                Factura creada:
                <span className="text-sm font-medium">
                  {convertDate(data.data?.invoice[0].creado)}
                </span>
              </h6>
              <h6 className="font-bold">
                Paquete creado:{" "}
                <span className="text-sm font-medium">
                  {" "}
                  {convertDate(data.data?.invoice[0].paquete.creado)}
                </span>
              </h6>
            </div>
            <div className="w-40">
              <address className="text-sm">
                <span className="font-bold"> Facturado a : </span>
                {`${clientName}  ${clientLastName} ${clientPhone}`}
              </address>
            </div>
            <div className="w-40">
              <address className="text-sm">
                <span className="font-bold">Enviado a :</span>
                {`${endUserName}  ${endUserLastName} ${endUserPhone} ${endUserLocation}`}
              </address>
            </div>
            <div />
          </div>
          <div className="flex justify-center p-4">
            <div className="border-b border-gray-200 shadow">
              <table className="">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-xs text-gray-500 ">#</th>
                    <th className="px-4 py-2 text-xs text-gray-500 ">
                      Nombre del paquete
                    </th>
                    <th className="px-4 py-2 text-xs text-gray-500 ">
                      Cantidad
                    </th>
                    <th className="px-4 py-2 text-xs text-gray-500 ">
                      Facturado
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="whitespace-nowrap">
                    <td className="px-6 py-4 text-sm text-gray-500">1</td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">{Package}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-500">
                        {PackageQuantity}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      ${subTotal}
                    </td>
                  </tr>

                  <tr className="">
                    <td colSpan={2} />
                    <td className="text-sm font-bold">Sub Total</td>
                    <td className="text-sm font-bold tracking-wider">
                      <b>${subTotal}</b>
                    </td>
                  </tr>
                  {/*end tr*/}
                  <tr>
                    <th colSpan={2} />
                    <td className="text-sm font-bold">
                      <b>Seguro</b>
                    </td>
                    <td className="text-sm font-bold">
                      <b>${100}</b>
                    </td>
                  </tr>
                  {/*end tr*/}
                  <tr className="text-white bg-gray-800">
                    <th colSpan={2} />
                    <td className="text-sm font-bold">
                      <b>Total</b>
                    </td>
                    <td className="text-sm font-bold">
                      <b>${PackageAmount}</b>
                    </td>
                  </tr>
                  {/*end tr*/}
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex justify-between p-4">
            <div>
              <h3 className="text-xl">Terminos y condiciones:</h3>
              <ul className="text-xs list-disc list-inside">
                <li>
                  Esta factura es exclusiva del cliente y para retirar el
                  paquete el usuario final debe mostrar una imagen de la misma
                </li>
                <li>
                  Cualquier duda puede contactar directamente con soporte para
                  estar ayudando{" "}
                </li>
              </ul>
            </div>
            <div className="p-4">
              <h3>CopyRight</h3>
              <div className="text-4xl italic text-indigo-500">AAA</div>
            </div>
          </div>
          <div className="w-full h-0.5 bg-indigo-500" />
          <div className="p-4">
            <div className="flex items-center justify-center">
              Muchas gracias por hacer negocios con nosotros.{" "}
            </div>
            <div className="flex items-end justify-end space-x-3">
              <button className="px-4 py-2 text-sm text-green-600 bg-green-100">
                Imprimir
              </button>

              <button className="px-4 py-2 text-sm text-red-600 bg-red-100">
                Atrás
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowInvoice;
