import React from "react";

const PackageForms = () => {
  return (
    <div className="bg-gray-100 mx-auto max-w-6xl bg-white py-20 px-12 lg:px-24 shadow-xl mb-24">
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-1 md:gap-6">
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form>
              <div className="shadow overflow-hidden sm:rounded-md">
                <h1 className="text-center font-medium text-xl">
                  Complete el siguiente formulario para agregar un paquete
                </h1>
                <div className="w-full h-0.5 bg-indigo-500" />

                <div className="px-2 py-2 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6">
                      <label
                        htmlFor="street_address"
                        className="block text-sm font-medium ">
                        Información del paquete{" "}
                      </label>
                    </div>
                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-700">
                        Nombre*
                      </label>
                      <input
                        type="text"
                        name="namePackage"
                        placeholder="Ej: Mesa Gaming"
                        required
                        className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="state"
                        className="block text-sm font-medium text-gray-700">
                        Peso (LB)*
                      </label>
                      <input
                        type="number"
                        name="namePackage"
                        placeholder="Ej: 10 LB"
                        required
                        className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="postal_code"
                        className="block text-sm font-medium ">
                        Cantidad (Unidad) *{" "}
                      </label>
                      <input
                        type="number"
                        name="namePackage"
                        placeholder="Ej: 10"
                        required
                        className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                      />
                    </div>
                    <div className="col-span-6">
                      <label
                        htmlFor="street_address"
                        className="block text-sm font-medium ">
                        Ubicación del paquete{" "}
                      </label>
                    </div>
                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-700">
                        Provincia*
                      </label>
                      <input
                        type="text"
                        name="namePackage"
                        placeholder="Ej: Mesa Gaming"
                        required
                        className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="state"
                        className="block text-sm font-medium text-gray-700">
                        Municipio*
                      </label>
                      <input
                        type="number"
                        name="namePackage"
                        placeholder="Ej: 10 LB"
                        required
                        className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="postal_code"
                        className="block text-sm font-medium text-gray-700">
                        Numero casa*{" "}
                      </label>
                      <input
                        type="number"
                        name="namePackage"
                        placeholder="Ej: 10"
                        required
                        className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                      />
                    </div>
                    <div className="col-span-6">
                      <label
                        htmlFor="street_address"
                        className="block text-sm font-medium ">
                        Información del usuario final{" "}
                      </label>
                    </div>
                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-700">
                        Nombre*
                      </label>
                      <input
                        type="text"
                        name="namePackage"
                        placeholder="Ej: Mesa Gaming"
                        required
                        className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="state"
                        className="block text-sm font-medium text-gray-700">
                        Apellido*
                      </label>
                      <input
                        type="number"
                        name="namePackage"
                        placeholder="Ej: 10 LB"
                        required
                        className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3 lg:col-span-1">
                      <label
                        htmlFor="postal_code"
                        className="block text-sm font-medium text-gray-700">
                        Sexo*{" "}
                      </label>
                      <select
                        type="number"
                        name="namePackage"
                        placeholder="Ej: 10"
                        required
                        className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3">
                        <option>Masculino</option>
                        <option>Femenino</option>
                      </select>
                    </div>
                    <div className="col-span-6 sm:col-span-3 lg:col-span-1">
                      <label
                        htmlFor="postal_code"
                        className="block text-sm font-medium text-gray-700">
                        Celular*{" "}
                      </label>
                      <input
                        type="number"
                        name="namePackage"
                        placeholder="Ej: 10"
                        required
                        className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                      />
                    </div>
                    <div className="col-span-6">
                      <label
                        htmlFor="street_address"
                        className="block text-sm font-medium ">
                        Ubicación de destino{" "}
                      </label>
                    </div>
                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-700">
                        Provincia*
                      </label>
                      <input
                        type="text"
                        name="namePackage"
                        placeholder="Ej: Mesa Gaming"
                        required
                        className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="state"
                        className="block text-sm font-medium text-gray-700">
                        Municipio*
                      </label>
                      <input
                        type="number"
                        name="namePackage"
                        placeholder="Ej: 10 LB"
                        required
                        className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="postal_code"
                        className="block text-sm font-medium text-gray-700">
                        Numero casa*{" "}
                      </label>
                      <input
                        type="number"
                        name="namePackage"
                        placeholder="Ej: 10"
                        required
                        className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                      />
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
    </div>
  );
};

export default PackageForms;
