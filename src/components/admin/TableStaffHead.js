import React from "react";

const TableStaffHead = () => {
  return (
    <thead>
      <tr className="bg-gray-700 text-white">
        <th className="px-6 align-middle border border-solid py-3  text-md  border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
          Nombre completo
        </th>

        <th className="px-6 align-middle border border-solid  py-3  text-md  border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
          Correo Electronico
        </th>
        <th className="px-6 align-middle border border-solid  py-3  text-md  border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
          Celular
        </th>
        <th className="px-6 align-middle border border-solid  py-3  text-md  border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
          Rol
        </th>
        <th className="px-6 align-middle border border-solid border-blueGray-100 py-3  text-md  border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
          Acciones
        </th>
      </tr>
    </thead>
  );
};

export default TableStaffHead;
