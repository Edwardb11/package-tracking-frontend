import React, { useEffect, useState } from "react";
import { url } from "../../api/api";
import useGetRoles from "../../hooks/useGetRoles";
import ButtonsModal from "./ButtonsModal";

const EditRol = ({ id, setData, showModal, setShowModals }) => {
  const [rolStaff, setRol] = useState({ data: [] });
  const [isEmpty, setIsEmpty] = useState(true);
  useEffect(() => {
    if (isEmpty) {
      fetch(`${url}/getStaffID/${id}`)
        .then((response) => response.json())
        .then((data) => setRol(data));
      setIsEmpty(false);
    } else {
      return () => {};
    }
  }, [id, isEmpty]);

  const state = rolStaff?.data;
  const rol = useGetRoles();
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center  items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className=" my-6 mx-auto 2xl:2/4 xl:w-2/4  lg:2/4 md:1/2 ">
              {/*content*/}
              <div className="border-0 rounded-lg w-full   shadow-lg relative flex flex-col  bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    ID: {id} - {state[0].personal?.nombres}{" "}
                    {state[0].personal?.apellidos}
                  </h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div>
                    <h3 className="text-xl font-base italic">
                      Consideraciones:
                    </h3>
                    <div className="px-6 ">
                      <ol className="list-[number] ">
                        <li>
                          Esta vista es especializada eliminar y agregar roles.
                        </li>
                        <li>Eliminar rol funciona inmediatamente.</li>
                      </ol>
                    </div>
                  </div>
                  <span className="font-bold pb-10">
                    NOTA: Debes darle a guardar para agregar un nuevo rol!
                  </span>
                  <div className="pt-5 flex flex-wrap justify-around	 ">
                    <table className="items-center bg-transparent w-1/2 border-collapse ">
                      <thead>
                        <tr>
                          <th className="px-6 align-middle border border-solid py-3  text-md  border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            Roles
                          </th>
                          <th className="px-6 align-middle border border-solid border-blueGray-100 py-3  text-md  border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                            Accion
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {state.map((items) => {
                          return (
                            <>
                              <tr className=" border-b text-sm text-gray-600">
                                <td className=" px-6 text-md   p-2 border-r whitespace-nowrap p-4">
                                  {items?.role?.nombre}
                                </td>
                                <td className=" px-6 text-md   p-2 border-r whitespace-nowrap p-4">
                                  <button
                                    className={`font-bold uppercase  px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150
                           bg-red-500 text-white active:bg-red-900 text-sm 
                      }
                      `}>
                                    Eliminar {items?.role?.id_roles}
                                  </button>
                                </td>
                              </tr>
                            </>
                          );
                        })}
                      </tbody>
                    </table>
                    <div className=" flex-end">
                      <h1>Agregar rol</h1>
                      <label
                        for="country"
                        class="block text-sm font-medium text-gray-700">
                        Roles disponibles
                      </label>
                      <select
                        id="country"
                        name="country"
                        autocomplete="country"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        {rol?.data.map((state, i) => {
                          return (
                            <>
                              <option value={state.id_roles}>
                                {state.nombre}
                              </option>
                            </>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                  <ButtonsModal setShowModals={setShowModals} />
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default EditRol;
