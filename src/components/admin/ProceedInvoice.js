import React, { useContext, useState } from "react";
import User from "../../context/userContext";
import AddInvoice from "../../utils/AddInvoice";
import ButtonsModal from "./ButtonsModal";

const ProceedInvoice = ({
  tracking,
  setData,
  showModal,
  setShowModals,
  lastState,
}) => {
  const [amount, setAmount] = useState(0);
  //   Get Staff ID
  const { user } = useContext(User);
  const idStaff = user.staffId;
  const Validate = async (e) => {
    e.preventDefault();
    AddInvoice(tracking, setData, amount, lastState, idStaff);
    setShowModals(false);
  };
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
                    Facturar: {tracking}
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
                        <li>Seguro: 50$</li>
                        <li>Recorrido: 1km = 10$</li>
                        <li>Peso: 1 LB = 250$ </li>
                      </ol>
                    </div>
                  </div>
                  <span className="font-bold pb-5">
                    NOTA: Se cobrara 1 LB aunque pese menos!
                  </span>
                  <form className="" onSubmit={Validate}>
                    <div className="shadow overflow-hidden sm:rounded-md  shadow-lg ">
                      <div className="px-4 py-5 bg-white sm:p-6 ">
                        <div className="grid grid-cols-6 gap-6">
                          <div className="col-span-6 sm:col-span-3">
                            <label
                              htmlFor="amount"
                              className="block text-sm font-medium text-gray-700">
                              Monto*
                            </label>
                            <input
                              value={amount}
                              onChange={(e) => setAmount(e.target.value)}
                              id="amount"
                              type="number"
                              name="amount"
                              required
                              className="w-full bg-gray-100 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*footer*/}
                    <ButtonsModal setShowModals={setShowModals} />
                  </form>
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

export default ProceedInvoice;
