import React, { useEffect, useState } from "react";
import { url } from "../../api/api";
import useGetRoles from "../../hooks/useGetRoles";
import { AddRolStaff, removeRol } from "../../utils/Staff";

import ButtonsModal from "./ButtonsModal";

const EditRol = ({ id, setData, showModal, setShowModals }) => {
  const [rolStaff, setRol] = useState({ data: [] });
  const [isEmpty, setIsEmpty] = useState(true);
  const [idRol, setIdRol] = useState("");
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
  const Validate = (e) => {
    e.preventDefault();
    AddRolStaff(id, idRol, setData);
  };

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
                  <h3 className="text-3xl font-semibold">ID: {id}</h3>
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
                    NOTA: Debes darle a agregar para guardar un nuevo rol!
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
                                <td className=" px-6 text-md   p-2 border-r whitespace-nowrap ">
                                  {items?.role?.nombre}
                                </td>
                                <td className=" px-6 text-md   p-2 border-r whitespace-nowrap ">
                                  <button
                                    className={`font-bold uppercase  px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150
                           bg-red-500 text-white active:bg-red-900 text-sm 
                      }
                      `}
                                    onClick={() =>
                                      removeRol(id, items?.role?.id_roles,setData,setRol)
                                    }>
                                    Eliminar
                                  </button>
                                </td>
                              </tr>
                            </>
                          );
                        })}
                      </tbody>
                    </table>
                    <form className="flex-end pt-10" onSubmit={Validate}>
                      <h1 className="font-bold"> Agregar rol</h1>
                      <label
                        for="rol"
                        className="block text-sm font-medium text-gray-700">
                        Roles disponibles
                      </label>
                      <select
                        id="rol"
                        name="rol"
                        value={idRol}
                        onChange={(e) => setIdRol(e.target.value)}
                        autocomplete="rol"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        <option value="" className="selected disabled hidden">
                          Seleccione
                        </option>
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
                      <button
                        className="my-6 justify-end bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="submit">
                        Agregar
                      </button>
                    </form>
                  </div>
                  <ButtonsModal
                    setShowModals={setShowModals}
                    onlyClose={true}
                  />
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
