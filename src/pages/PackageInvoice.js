import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ShowInvoice from "../components/client/ShowInvoice";

const PackageInvoice = () => {
  return (
    <>
      <NavBar />
      <div className="py-20 bg-white">
        <div className="flex flex-col px-8 mx-auto space-y-12 max-w-7xl xl:px-12">
          <div className="relative">
            <h2 className="w-full text-3xl font-bold text-center sm:text-4xl md:text-5xl">
              {" "}
              Factura del paquete
            </h2>
            <p className="w-full py-8 mx-auto -mt-2 text-lg text-center text-gray-700 intro sm:max-w-3xl">
              En esta sección podrás observar la factura de su paquete, solo
              puedes observarla o descargarla...
            </p>
          </div>
        </div>
      </div>
      <ShowInvoice />
      <Footer />
    </>
  );
};

export default PackageInvoice;
