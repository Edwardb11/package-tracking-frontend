import React from "react";

const ProceedInvoice = ({ tracking, setData }) => {
  return (
    <form className="shadow-lg ">
      <div className="shadow overflow-hidden sm:rounded-md ">
        <div className="px-4 py-5 bg-white sm:p-6 ">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="amount"
                className="block text-sm font-medium text-gray-700">
                Monto*
              </label>
              <input
                id="amount"
                type="number"
                name="amount"
                required
                className="w-full bg-gray-50 text-black border border-gray-200 rounded py-3 px-4 mb-3"
              />
            </div>
          </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Guardar
          </button>
        </div>
      </div>
    </form>
  );
};

export default ProceedInvoice;
