import React from "react";
import TablePackage from "../components/admin/TablePackage";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const ManagePackage = () => {
  return (
    <>
      <NavBar />
      <div className="py-20 bg-white">
        <div className="flex flex-col px-8 mx-auto space-y-12 max-w-7xl xl:px-12">
          <div className="relative">
            <h2 className="w-full text-3xl font-bold text-center sm:text-4xl md:text-5xl">
              {" "}
              Gestionar paquetes
            </h2>
            <p className="w-full py-8 mx-auto -mt-2 text-lg text-center text-gray-700 intro sm:max-w-3xl">
              Actualizar los estados de los paquetes al instante de realizar
              dicha accion.
            </p>
          </div>
        </div>
        <TablePackage />
      </div>
      <Footer />
    </>
  );
};

export default ManagePackage;
