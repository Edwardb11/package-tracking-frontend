import React, { useContext } from "react";
import User from "../../context/userContext";
import convertDate from "../../utils/convertDate";
import { packagesShipped, sendPackage } from "../../utils/AddStatePackage";
import ButtonsModal from "./ButtonsModal";

const ProceedSend = ({
  data,
  setData,
  showModal,
  setShowModals,
  delivered,
}) => {
  //   Get Staff ID
  const { user } = useContext(User);
  const idStaff = user.staffId;
  if (delivered) {
    return (
      <>
        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-3xl font-semibold">Envio en curso</h3>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <div>
                      <h3 className="text-xl font-base italic">Notas:</h3>
                      <div className="px-6 ">
                        <ol className="list-[upper-roman] ">
                          <li>
                            Fue entregado a:{" "}
                            {data?.paquete?.usuario_finale?.nombres}{" "}
                            {data?.paquete?.usuario_finale?.apellidos}
                          </li>
                          <li>
                            En la dirección:{" "}
                            {data?.paquete?.usuario_finale?.ubicacion}
                          </li>
                        </ol>
                      </div>
                    </div>

                    <div className="flex items-center justify-end ">
                      <ButtonsModal
                        onlyClose={true}
                        setShowModals={setShowModals}
                      />
                      <button
                        onClick={() =>
                          packagesShipped(
                            idStaff,
                            data?.paquete.id_paquete,
                            data?.ubicacion,
                            setData,
                            setShowModals
                          )
                        }
                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                        Entregado?
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </>
    );
  } else {
    return (
      <>
        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-3xl font-semibold">
                      Enviar: {data?.paquete.id_paquete}
                    </h3>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <div>
                      <h3 className="text-xl font-base italic">
                        Consideraciones:
                      </h3>
                      <div className="px-6 ">
                        <ol className="list-[upper-roman] ">
                          <li>
                            Debe ser entregado a la persona:{" "}
                            {data?.paquete?.usuario_finale?.nombres}{" "}
                            {data?.paquete?.usuario_finale?.apellidos}
                          </li>
                          <li>
                            Debe ser entregado en la dirección:{" "}
                            {data?.paquete?.usuario_finale?.ubicacion}
                          </li>
                          <li>
                            Articulo facturado:{" "}
                            {convertDate(data?.paquete?.facturas[0]?.creado)}
                          </li>
                          <li>
                            Costo del envio: $
                            {data?.paquete?.facturas[0]?.cantidad_a_pagar}
                          </li>
                          <li>
                            Ultima ubicaciòn:
                            {data?.ubicacion}
                          </li>
                        </ol>
                      </div>
                    </div>
                    <span className="font-bold pb-5">
                      NOTA: El envio esta pagado.
                    </span>
                    <div className="flex items-center justify-end ">
                      <ButtonsModal
                        onlyClose={true}
                        setShowModals={setShowModals}
                      />
                      <button
                        onClick={() =>
                          sendPackage(
                            idStaff,
                            data?.paquete.id_paquete,
                            data?.ubicacion,
                            setData,
                            setShowModals
                          )
                        }
                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                        Enviar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </>
    );
  }
};

export default ProceedSend;
