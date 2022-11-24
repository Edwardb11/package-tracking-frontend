import React from "react";
import DeliveryCards from "../components/admin/DeliveryCards";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const AdminDelivery = () => {
  return (
    <div>
      {" "}
      <NavBar />
      <div className="py-10 mt-10">
        <div className="flex flex-col px-8 mx-auto space-y-12 max-w-7xl xl:px-12">
          <div className="relative">
            <h2 className="w-full text-3xl font-bold text-center sm:text-4xl md:text-5xl">
              {" "}
              Acciones permitidas
            </h2>
          </div>
        </div>
        <DeliveryCards />
      </div>
      <Footer />
    </div>
  );
};

export default AdminDelivery;
