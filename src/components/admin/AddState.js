import React from "react";
import { useParams } from "react-router-dom";
import useGetIdPackage from "../../hooks/useGetIdPackage";
import convertDate from "../../utils/convertDate";

const AddState = () => {
  const { id } = useParams();
  console.log(id);
  const data = useGetIdPackage(id);

  const state = data.state;
  console.log(state);
  return (
    <div className=" mx-auto max-w-7xl bg-white py-20 px-12 lg:px-24 shadow-2xl mb-24">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <h2 className="text-2xl font-medium leading-6 text-gray-900">
            Información
          </h2>
          <div className="px-4 sm:px-0 mt-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Tracking
            </h3>
            <p className="mt-1 text-base text-gray-600">{id}</p>
          </div>
          <div className="px-4 sm:px-0 mt-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Estados anteriores
            </h3>
            {state.map((data) => {
              return (
                <div className="flex  flex-wrap  justify-between">
                  <div className="">
                    <p className=" justify-start mt-1 mx-1 text-base text-gray-600">
                      {data.estado.nombre}
                    </p>
                  </div>
                  <div className="flex-wrap ">
                    <p className=" justify-start mt-1 mx-1 text-base text-gray-600">
                      {convertDate(data.creado)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="px-4 sm:px-0 mt-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Última ubicación
            </h3>
            <p className="mt-1 text-base text-gray-600">
              {state[state.length - 1].ubicacion}
            </p>
          </div>
        </div>
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form>
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="amount"
                      className="block text-sm font-medium text-gray-700">
                      Ubicación del paquete*
                    </label>
                    <input
                      type="text"
                      name="amount"
                      required
                      className="w-full bg-gray-100 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="paymentMethod"
                      className="block text-sm font-medium text-gray-700">
                      Estado del paquete*
                    </label>
                    <select
                      required
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                      <option value="none" className="selected disabled hidden">
                        Seleccione
                      </option>
                      <option value="2">Envalijado</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Guardar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddState;
