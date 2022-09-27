import React from "react";

const Register = () => {
  return (
    <div className="bg-gray-100 mx-auto max-w-6xl bg-white py-20 px-12 lg:px-24 shadow-xl mb-24">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Acciones
            </h3>
            <div className="px-4 sm:px-0 mt-12">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Agregar roles
              </h3>
              <p className="mt-1 text-base text-gray-600">Roles</p>
            </div>
            <div className="px-4 sm:px-0 mt-12">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Editar roles
              </h3>
              <p className="mt-1 text-base text-gray-600">Roles</p>
            </div>
            <div className="px-4 sm:px-0 mt-12">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Eliminar personal
              </h3>
              <p className="mt-1 text-base text-gray-600">Roles</p>
            </div>
          </div>
        </div>
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form action="#" method="POST">
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="amount"
                      className="block text-sm font-medium text-gray-700">
                      Nombre*
                    </label>
                    <input
                      id="amount"
                      type="number"
                      name="amount"
                      required
                      className="w-full bg-gray-100 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="amount"
                      className="block text-sm font-medium text-gray-700">
                      Apellido*
                    </label>
                    <input
                      id="amount"
                      type="number"
                      name="amount"
                      required
                      className="w-full bg-gray-100 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium text-gray-700">
                      Sexo
                    </label>
                    <input
                      id="amount"
                      type="number"
                      name="amount"
                      required
                      className="w-full bg-gray-100 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label
                      htmlFor="state"
                      className="block text-sm font-medium text-gray-700">
                      Niveles de estudio
                    </label>
                    <input
                      id="amount"
                      type="number"
                      name="amount"
                      required
                      className="w-full bg-gray-100 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label
                      htmlFor="postal_code"
                      className="block text-sm font-medium text-gray-700">
                      Fecha de nacimiento
                    </label>
                    <input
                      id="amount"
                      type="number"
                      name="amount"
                      required
                      className="w-full bg-gray-100 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="street_address"
                      className="block text-sm font-medium text-gray-700">
                      Correo Electrónico
                    </label>
                    <input
                      id="amount"
                      type="number"
                      name="amount"
                      required
                      className="w-full bg-gray-100 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="street_address"
                      className="block text-sm font-medium text-gray-700">
                      Contraseña
                    </label>
                    <input
                      id="amount"
                      type="number"
                      name="amount"
                      required
                      className="w-full bg-gray-100 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="street_address"
                      className="block text-sm font-medium text-gray-700">
                      Celular
                    </label>
                    <input
                      id="amount"
                      type="number"
                      name="amount"
                      required
                      className="w-full bg-gray-100 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="paymentMethod"
                      className="block text-sm font-medium text-gray-700">
                      Rol*
                    </label>
                    <select
                      id="paymentMethod"
                      name="paymentMethod"
                      required
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                      <option value="1" defaultChecked>
                        Adm
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
