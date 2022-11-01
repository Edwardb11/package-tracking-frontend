import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { url } from "../../api/api";
import PayBill from "../../utils/PayBill";

const PackagePayment = () => {
  const history = useHistory();
  const { id } = useParams();
  const [amount, setAmount] = useState();
  const [paid, setPaid] = useState();
  const [paymentMethod, setPaymentMethod] = useState(1);
  const [data, setData] = useState({});
  useEffect(() => {
    axios.get(`${url}/getPaymentTransaction/${id}`).then((res) => {
      setPaid(res.data.paid);
      let isEmpty = JSON.stringify(data) === "{}";
      if (isEmpty) {
        if (paid) {
          history.push(`/showInvoice/${id}`);
          return;
        } else {
          axios.get(`${url}/getInvoice/${id}`).then((res) => setData(res));
        }
      }
    });

    return () => {};
  }, [data, id, paid, history]);

  const PackageTracking = data.data?.invoice[0]?.paquete.id_paquete;
  const PackageName = data.data?.invoice[0]?.paquete.nombre;
  const AmountPay = data.data?.invoice[0]?.cantidad_a_pagar;

  const Validate = async (e) => {
    e.preventDefault();
    PayBill(paymentMethod, id, amount, AmountPay,PackageTracking);
  };

  return (
    <>
      <div className=" mx-auto max-w-6xl bg-white py-20 px-12 lg:px-24 shadow-xl mb-24">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1 ">
            <h2 className="text-2xl font-medium leading-6 text-gray-900">
              Información
            </h2>
            <div className="px-4 sm:px-0 mt-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Tracking
              </h3>
              <p className="mt-1 text-base text-gray-600">{PackageTracking}</p>
            </div>
            <div className="px-4 sm:px-0 mt-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Nombre del paquete
              </h3>
              <p className="mt-1 text-base text-gray-600">{PackageName}</p>
            </div>
            <div className="px-4 sm:px-0 mt-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Monto a pagar
              </h3>
              <p className="mt-1 text-base text-gray-600">{AmountPay}</p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2 shadow-sm ">
            <form onSubmit={Validate}>
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="amount"
                        className="block text-sm font-medium text-gray-700">
                        Monto*
                      </label>
                      <input
                        id="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        type="number"
                        name="amount"
                        required
                        className="w-full bg-gray-50 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="paymentMethod"
                        className="block text-sm font-medium text-gray-700">
                        Método de pago*
                      </label>
                      <select
                        id="paymentMethod"
                        name="paymentMethod"
                        value={paymentMethod}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        required
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
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
                    className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
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
