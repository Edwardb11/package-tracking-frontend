import React from "react";
import LastPackage from "./LastPackage";
import Table from "./Table";

const RecentActivities = () => {
  return (
    <section className="flex flex-wrap py-1  mt-24">
      <div className="w-full md:w-8/12  xl:w-8/12 xl:mb-0 px-4 mx-auto ">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
          <div className="rounded-t mb-0 px-4 py-3 border-0">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                <h3 className="font-semibold text-base text-blueGray-700">
                  Actividades recientes
                </h3>
              </div>
              <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                <button className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                  TOP 10
                </button>
              </div>
            </div>
          </div>
          <Table />
        </div>
      </div>
      <div className="relative mt-12 sm:w-full mx-auto md:w-1/5 xl:w-1/5 lg:w-1/5 2xl:w-1/5  ">
        <LastPackage />
      </div>
    </section>
  );
};

export default RecentActivities;
