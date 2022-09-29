import React from "react";
import useGetStaff from "../../hooks/useGetStaff";

const TableStaff = () => {
  const data = useGetStaff();

  return (
    <div className="flex table w-full p-2">
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-50 border-b">
            <th className="p-2 border-r cursor-pointer text-base  text-gray-500">
              <div className="flex items-center justify-center">
                Nombre completo
              </div>
            </th>
            <th className="p-2 border-r cursor-pointer text-base text-gray-500">
              <div className="flex items-center justify-center">E-mail</div>
            </th>
            <th className="p-2 border-r cursor-pointer text-base  text-gray-500">
              <div className="flex items-center justify-center">Celular</div>
            </th>
            <th className="p-2 border-r cursor-pointer text-base text-gray-500">
              <div className="flex items-center justify-center">Rol</div>
            </th>
            <th className="p-2 border-r cursor-pointer text-base text-gray-500">
              <div className="flex items-center justify-center">Accion</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.data.map((items) => {
            return (
              <>
                <tr className="bg-gray-100 text-center border-b text-sm text-gray-600">
                  <td className="p-2 border-r">
                    {items.personal.nombres} {items.personal.apellidos}
                  </td>
                  <td className="p-2 border-r">
                    {items.personal.correo_electronico}
                  </td>
                  <td className="p-2 border-r">
                    {items.personal.celular || "No definido"}
                  </td>
                  <td className="p-2 border-r">
                    -- {items.personal.roles[0].nombre} -{" "}
                    {items.personal?.roles[1]?.nombre} -{" "}
                    {items.personal?.roles[2]?.nombre}
                  </td>
                  <td>
                    <button
                      href="a"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                      Eliminar
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
          <tr className="bg-gray-100 text-center border-b text-sm text-gray-600"></tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableStaff;