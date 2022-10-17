import React from "react";
import ButtonsModal from "./ButtonsModal";

const EditRol = ({ id, setData, showModal, setShowModals }) => {
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center  items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className=" my-6 mx-auto w-2/4  ">
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
                        <li>No puedes editar información basica.</li>
                        <li>
                          Esta vista es especializada para ver y editar roles.
                        </li>
                      </ol>
                    </div>
                  </div>
                  <span className="font-bold pb-5">
                    NOTA: Debes darle a guardar para registrar los cambios!
                  </span>

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
