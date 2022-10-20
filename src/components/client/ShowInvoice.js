import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { url } from "../../api/api";
import showInvoice from "../../img/showInvoice.png";
import convertDate from "../../utils/convertDate";

const ShowInvoice = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    let isEmpty = JSON.stringify(data) === "{}";
    if (isEmpty) {
      axios
        .get(`${url}/getPaymentTransaction/${id}`)
        .then((res) => setData(res));
    }
    return () => {};
  }, [data, id]);

  const Package = data?.data?.transaction[0]?.factura.paquete?.nombre;
  const Transaction = data?.data?.transaction[0]?.id_transaccion;
  const TransactionDate = data?.data?.transaction[0]?.creado;
  const PaymentMethod = data?.data?.transaction[0]?.metodos_de_pago?.nombre;
  const Invoice = data?.data?.transaction[0]?.factura?.id_factura;
  const InvoiceDate = data?.data?.transaction[0]?.factura?.creado;
  const PackageAmount = data?.data?.transaction[0]?.factura.cantidad_a_pagar;
  const PackageQuantity = data?.data?.transaction[0]?.factura.paquete?.cantidad;
  const PackageWeigh = data?.data?.transaction[0]?.factura.paquete?.peso;
  const PackageTracking =
    data?.data?.transaction[0]?.factura.paquete?.id_paquete;
  const clientName =
    data?.data?.transaction[0]?.factura.paquete?.cliente.nombres;
  const clientLastName =
    data?.data?.transaction[0]?.factura.paquete?.cliente.apellidos;
  const clientPhone =
    data?.data?.transaction[0]?.factura.paquete?.cliente.celular;
  const endUserName =
    data?.data?.transaction[0]?.factura.paquete?.usuario_finale.nombres;
  const endUserLastName =
    data?.data?.transaction[0]?.factura.paquete?.usuario_finale.apellidos;
  const endUserPhone =
    data?.data?.transaction[0]?.factura.paquete?.usuario_finale.celular;
  const endUserLocation =
    data?.data?.transaction[0]?.factura.paquete?.usuario_finale.ubicacion;

  const subTotal = PackageAmount - 50;
  return (
    <div className="max-w-5xl mx-auto mb-10 bg-white shadow-2xl shadow-gray-900/50">
      <article className="overflow-hidden">
        <div className="bg-[white] rounded-b-md">
          <div className="p-9">
            <div className="space-y-6 text-slate-700">
              <img
                className="object-cover h-12"
                src={showInvoice}
                alt="invoice"
              />
              <p className="text-xl font-extrabold tracking-tight uppercase font-body">
                Sistema de paqueteria
              </p>
              <div className="border-t border-solid border-slate-200 rounded-b"></div>{" "}
            </div>
          </div>
          <div className="p-9">
            <div className="flex w-full">
              <div className="grid grid-cols-4 gap-12">
                <div className="font-light text-slate-500">
                  <p className="text-md font-normal text-slate-700">
                    Transsación
                  </p>
                  <p className="text-sm"># {Transaction}</p>
                  <p className="text-sm">{PaymentMethod}</p>
                  <p className="text-sm">{convertDate(TransactionDate)}</p>
                </div>
                <div className=" font-light text-slate-500">
                  <p className="text-md font-normal text-slate-700">
                    Facturado a
                  </p>
                  <p className="text-sm">
                    {" "}
                    {`${clientName}  ${clientLastName} `}
                  </p>
                  <p className="text-sm"> {`${clientPhone}`}</p>
                </div>
                <div className="font-light text-slate-500">
                  <p className="text-md font-normal text-slate-700">
                    Enviado a{" "}
                  </p>
                  <p className="text-sm">
                    {" "}
                    {`${endUserName}  ${endUserLastName} `}
                  </p>
                  <p className="text-sm"> {`${endUserPhone} `}</p>
                  <p className="text-sm"> {`${endUserLocation}`}</p>
                </div>
                <div className="font-light text-slate-500">
                  <p className="text-md font-normal text-slate-700">Factura</p>
                  <p className="text-sm"> # {Invoice}</p>
                  <p className="mt-2 text-md font-normal text-slate-700">
                    Fecha
                  </p>
                  <p className="text-sm"> {convertDate(InvoiceDate)}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-9">
            <div className="flex flex-col mx-0 mt-8">
              <table className="min-w-full divide-y divide-slate-500">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-md font-normal text-slate-700 sm:pl-6 md:pl-0">
                      ID
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-md font-normal text-slate-700 sm:pl-6 md:pl-0">
                      Descripcion
                    </th>
                    <th
                      scope="col"
                      className="hidden py-3.5 px-3 text-right text-md font-normal text-slate-700 sm:table-cell">
                      Cantidad
                    </th>
                    <th
                      scope="col"
                      className="hidden py-3.5 px-3 text-right text-md font-normal text-slate-700 sm:table-cell">
                      Libras
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-3 pr-4 text-right text-md font-normal text-slate-700 sm:pr-6 md:pr-0">
                      Costo de envio
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-200">
                    <td className="py-4 pl-4 pr-3 text-sm sm:pl-6 md:pl-0">
                      {PackageTracking}
                    </td>
                    <td className="py-4 pl-4 pr-3 text-sm sm:pl-6 md:pl-0">
                      {Package}
                    </td>
                    <td className="hidden px-3 py-4 text-sm text-right text-slate-500 sm:table-cell">
                      {PackageQuantity}
                    </td>
                    <td className="hidden px-3 py-4 text-sm text-right text-slate-500 sm:table-cell">
                      {PackageWeigh} LB
                    </td>
                    <td className="py-4 pl-3 pr-4 text-sm text-right text-slate-500 sm:pr-6 md:pr-0">
                      $ {PackageAmount}
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <th
                      scope="row"
                      colSpan={4}
                      className="hidden pt-4 pl-6 pr-3 text-sm font-light text-right text-slate-500 sm:table-cell md:pl-0">
                      Seguro
                    </th>
                    <td className="pt-4 pl-3 pr-4 text-sm text-right text-slate-500 sm:pr-6 md:pr-0">
                      ${50}
                    </td>
                  </tr>
                  <tr>
                    <th
                      scope="row"
                      colSpan={4}
                      className="hidden pt-6 pl-6 pr-3 text-sm font-light text-right text-slate-500 sm:table-cell md:pl-0">
                      Subtotal
                    </th>

                    <td className="pt-6 pl-3 pr-4 text-sm text-right text-slate-500 sm:pr-6 md:pr-0">
                      ${subTotal}
                    </td>
                  </tr>
                  <tr>
                    <th
                      scope="row"
                      colSpan={4}
                      className="hidden pt-6 pl-6 pr-3 text-sm font-light text-right text-slate-500 sm:table-cell md:pl-0">
                      Descuento
                    </th>

                    <td className="pt-6 pl-3 pr-4 text-sm text-right text-slate-500 sm:pr-6 md:pr-0">
                      $0.00
                    </td>
                  </tr>

                  <tr>
                    <th
                      scope="row"
                      colSpan={4}
                      className="hidden pt-4 pl-6 pr-3 text-sm font-normal text-right text-slate-700 sm:table-cell md:pl-0">
                      Total
                    </th>

                    <td className="pt-4 pl-3 pr-4 text-sm font-normal text-right text-slate-700 sm:pr-6 md:pr-0">
                      ${PackageAmount}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
          <div className="mt-8 p-9">
            <div className="border-t pt-9 border-slate-200">
              <div className="text-sm font-light text-slate-700">
                <p>
                  Los plazos de pago son de 14 días. Tenga en cuenta que de
                  acuerdo con el Ley 0000 de Pagos Atrasados de Deudas por
                  Liquidar, los trabajadores independientes son derecho a
                  reclamar un cargo por mora de 00.00 por falta de pago de las
                  deudas después de este tiempo, momento en el que se enviará
                  una nueva factura con la adición de esta tarifa. Si el pago de
                  la factura revisada no se recibe dentro de otros 14 días,
                  intereses adicionales será cargado a la cuenta vencida y una
                  tasa legal de 18% más la base del Banco de Republica
                  Dominicana de 0,5%, totalizando 18,5%.
                </p>
              </div>
            </div>
            <div className="text-end flex items-center justify-end p-6 mt-8 border-t border-solid border-slate-200 rounded-b">
              <Link
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                to={"/myPackages"}>
                Atrás
              </Link>
              <button
                className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button">
                Imprimir
              </button>
            </div>{" "}
          </div>
        </div>
      </article>
    </div>
  );
};

export default ShowInvoice;
