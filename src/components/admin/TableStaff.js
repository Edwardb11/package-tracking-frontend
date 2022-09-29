import React from "react";

const TableStaff = () => {
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
              <div className="flex items-center justify-center">Acciones</div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-100 text-center border-b text-sm text-gray-600">
            <td className="p-2 border-r">John Doe</td>
            <td className="p-2 border-r">john@gmail.com</td>
            <td className="p-2 border-r">Sydney, Australia</td>
            <td className="p-2 border-r">Sydney, Australia</td>
            <td>
              <a
                href="aa"
                className="bg-red-500 p-2 text-white hover:shadow-lg text-sm ">
                Elimionar
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableStaff;
