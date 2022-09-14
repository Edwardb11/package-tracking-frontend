import React from "react";
import { useParams } from "react-router-dom";

const PackagePayment = () => {
  const id = useParams();
  console.log(id);
  return (
    <>
      <div className="bg-gray-100 mx-auto max-w-6xl bg-white py-20 px-12 lg:px-24 shadow-xl mb-24">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-medium leading-6 text-gray-900">
              Factura
            </h2>
            <div className="px-4 sm:px-0 mt-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Paquete
              </h3>
              <p className="mt-1 text-base text-gray-600">
                Informacion del paquete{" "}
              </p>
            </div>
            <div className="px-4 sm:px-0 mt-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Nombre del paquete
              </h3>
              <p className="mt-1 text-base text-gray-600">
                Informacion del paquete{" "}
              </p>
            </div>
            <div className="px-4 sm:px-0 mt-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Monto a pagar
              </h3>
              <p className="mt-1 text-base text-gray-600">
                Informacion del paquete{" "}
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form >
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="amount"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Monto*
                      </label>
                      <input
                        id="amount"
                        type="number"
                        name="amount"
                        className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="paymentMethod"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Método de pago*
                      </label>
                      <select
                        id="paymentMethod"
                        name="paymentMethod"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option value="1" defaultChecked>
                          PayPal
                        </option>
                        <option value="2">Tarjeta de débito y crédito</option>
                        <option value="3">Cheques</option>
                        <option value="4">Transferencia bancaria</option>
                        <option value="5">Tarjeta prepago</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Guardar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default PackagePayment;
