import React from "react";
import ButtonsModal from "../admin/ButtonsModal";
import convertDate from "../../utils/convertDate";

const ShowMore = ({ items, showModal, setShowModals }) => {
  const lastState = items?.estados?.length;
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className=" my-6 mx-auto 2xl:1/4 xl:w-1/4  lg:2-1/4 md:2-1/2 sm:w-3/4 ">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Paquete:{items.id_paquete}
                  </h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div>
                    <h3 className="text-xl font-semibold italic">
                      Información general
                    </h3>
                    <div className="px-6 ">
                      <div className="flex justify-between  ">
                        <span className="font-bold ">Nombre</span>
                        <span>{items.nombre}</span>
                      </div>
                      <div className="flex justify-between  ">
                        <span className="font-bold ">Cantidad</span>
                        <span>{items.cantidad}</span>
                      </div>
                      <div className="flex justify-between  ">
                        <span className="font-bold ">Peso</span>
                        <span>{items.peso} LB</span>
                      </div>
                      <div className="flex justify-between  ">
                        <span className="font-bold ">Recoger</span>
                        <span>{items.ubicacion}</span>
                      </div>
                      <div className="flex justify-between  ">
                        <span className="font-bold ">Entregar a</span>
                        <span>
                          {items.usuario_finale.nombres}{" "}
                          {items.usuario_finale.apellidos}{" "}
                        </span>
                      </div>
                      <div className="flex justify-between  ">
                        <span className="font-bold ">Destino</span>
                        <span>{items.usuario_finale.ubicacion}</span>
                      </div>
                    </div>
                    <div className="mt-10 ">
                      <h3 className="text-xl font-semibold italic ">
                        Ultimo estado
                      </h3>
                      <div className="px-6 ">
                        <div className="flex justify-between  ">
                          <span className="font-bold ">
                            {items?.estados[lastState - 1]?.nombre ||
                              "Pendiente"}
                          </span>
                          <span>
                            {convertDate(
                              items?.estados[lastState - 1]?.paquetes_estados
                                ?.creado
                            ) || "Pendiente"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <ButtonsModal setShowModals={setShowModals} onlyClose={true} />
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default ShowMore;
