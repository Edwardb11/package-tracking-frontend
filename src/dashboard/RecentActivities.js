import React from "react";
import LastPackage from "./LastPackage";
import Table from "./Table";

const RecentActivities = () => {
  return (
    <section className="flex flex-wrap py-1  mt-24">
      <div className="w-full md:w-8/12  xl:w-8/12 xl:mb-0 px-4 mx-auto ">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
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
