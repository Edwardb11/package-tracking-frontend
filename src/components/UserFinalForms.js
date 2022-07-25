import React from "react";

const UserFinalForms = () => {
  return (
    <div className="grid gap-6 mb-6 lg:grid-cols-2">
      <div>
        <label
          htmlFor="nombre_u"
          className="block mb-2 text-sm font-semibold px-1 text-gray-900 dark:text-gray-900"
        >
          Nombre
        </label>
        <input
          type="text"
          id="nombre_u"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Ej:John"
          required
        />
      </div>
      <div>
        <label
          htmlFor="apellido"
          className="block mb-2 text-sm font-semibold px-1 text-gray-900 dark:text-gray-900"
        >
          Apellido
        </label>
        <input
          type="text"
          id="apellido"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Ej:Smith"
          required
        />
      </div>
      <div>
        <label
          htmlFor="sexo"
          className="block mb-2 text-sm font-semibold px-1 text-gray-900 dark:text-gray-900"
        >
          Sexo
        </label>
        <select
          id="sexo"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        >
          <option disabled>Selecione</option>
          <option value="m" selected>
            Masculino
          </option>
          <option value="f">Femenino</option>
        </select>
      </div>
      <div>
        <label
          htmlFor="celular"
          className="block mb-2 text-sm font-semibold px-1 text-gray-900 dark:text-gray-900"
        >
          Celular
        </label>
        <input
          type="text"
          name="celular"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Ej: 809-999-1111"
          required
        />
      </div>
      <div>
        <label
          htmlFor="ubicacion"
          className="block mb-2 text-sm font-semibold px-1 text-gray-900 dark:text-gray-900"
        >
          Ubicación
        </label>
        <input
          type="text"
          name="ubicacion"
          className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Ej:Cutupu, La Vega"
          required
        />
      </div>
    </div>
  );
};

export default UserFinalForms;
