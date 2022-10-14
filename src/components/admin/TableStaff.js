import React, { useContext } from "react";
import User from "../../context/userContext";
import useGetStaff from "../../hooks/useGetStaff";
import { removeStaff } from "../../utils/Staff";

const TableStaff = () => {
  const { data, setData } = useGetStaff();

  const { user } = useContext(User);
  return (
    <div className="w-full xl:w-10/12 mb-12 xl:mb-0 px-4 mx-auto mt-24">
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
        <div className="block w-full overflow-x-auto">
          <table className="items-center bg-transparent w-full border-collapse ">
            <thead>
              <tr className="bg-gray-200">
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
            <tbody>
              {data.data.map((items) => {
                return (
                  <>
                    <tr
                      className=" border-b text-sm text-gray-600"
                      key={items.personal.id_personal}>
                      <td className=" px-6 text-md  p-2 border-r whitespace-nowrap p-4">
                        {items.personal.nombres} {items.personal.apellidos}
                      </td>
                      <td className=" px-6 p-2 border-r text-md whitespace-nowrap p-4">
                        {items.personal.correo_electronico}
                      </td>
                      <td className=" px-6  p-2 border-r text-md whitespace-nowrap p-4">
                        {items.personal.celular || "No definido"}
                      </td>
                      <td className=" px-6 font-bold  p-2 border-r text-md whitespace-nowrap p-4">
                        -- {items.personal.roles[0].nombre} -{" "}
                        {items.personal?.roles[1]?.nombre} -{" "}
                        {items.personal?.roles[2]?.nombre}
                      </td>
                      <td>
                        <button
                          disabled={
                            items.personal?.id_personal === user.staffId
                          }
                          onClick={() =>
                            removeStaff(items.personal.id_personal, setData)
                          }
                          className={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md 
                      ${
                        items.personal?.id_personal === user.staffId
                          ? " bg-gray-300  hover:bg-gra-100 cursor-not-allowed "
                          : " text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                      }
                      `}>
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
      </div>
    </div>
  );
};

export default TableStaff;
