import React from "react";
import { removeStaff } from "../../utils/Staff";

const TableStaffBody = ({
  key,
  name,
  lastName,
  email,
  phone,
  rol1,
  rol2,
  rol3,
  setGetStaff,
  comparId,
  getStaff,
  staffId,
  setData,
  isOld,
}) => {
  return (
    <>
      <tr className=" border-b text-sm text-gray-600" key={key}>
        <td className=" px-6 text-md   p-2 border-r whitespace-nowrap p-4">
          {name} {lastName}
        </td>
        <td className=" px-6 p-2 border-r text-md whitespace-nowrap p-4">
          {email}
        </td>
        <td className=" px-6  p-2 border-r text-md whitespace-nowrap p-4">
          {phone || "No definido"}
        </td>
        <td className=" px-6 font-bold  p-2 border-r text-md whitespace-nowrap p-4">
          -- {rol1} - {rol2} - {rol3}
        </td>
        <td className=" text-center justify-center ">
          {isOld ? (
            <>
              <button
                disabled={comparId}
                onClick={() => removeStaff(staffId, setData, isOld)}
                className={`
                             font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150
                           
                            ${
                              comparId
                                ? " bg-gray-300  hover:bg-gray-100 cursor-not-allowed "
                                : "bg-emerald-500 text-white active:bg-emerald-600"
                            }
                            `}>
                Actualizar
              </button>
            </>
          ) : (
            <>
              <button
                disabled={comparId}
                className={`
                             font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150
                           
                            ${
                              comparId
                                ? " bg-gray-300  hover:bg-gray-100 cursor-not-allowed "
                                : "bg-emerald-500 text-white active:bg-emerald-600"
                            }
                            `}
                onClick={() =>
                  setGetStaff({
                    view: !getStaff.view,
                    staffId: staffId,
                  })
                }>
                Editar
              </button>
              <button
                disabled={comparId}
                onClick={()=>removeStaff(staffId, setData)}
                className={`
                            font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150
                            ${
                              comparId
                                ? " bg-gray-300  hover:bg-gray-100 cursor-not-allowed "
                                : "bg-red-500 text-white active:bg-red-900 text-sm "
                            }
                        `}>
                Eliminar
              </button>
            </>
          )}
        </td>
      </tr>
    </>
  );
};

export default TableStaffBody;
