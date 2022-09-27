import React from "react";
import Register from "../components/admin/Register";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const RegisterStaff = () => {
  return (
    <>
      <NavBar />
      <div className="py-20 bg-white">
        <div className="flex flex-col px-8 mx-auto space-y-12 max-w-7xl xl:px-12">
          <div className="relative">
            <h2 className="w-full text-3xl font-bold text-center sm:text-4xl md:text-5xl">
              {" "}
              Registrar nuevos usuarios
            </h2>
            <p className="w-full py-8 mx-auto -mt-2 text-lg text-center text-gray-700 intro sm:max-w-3xl">
              En esta sección podrás agregar un nuevo usuario, solo necesitas
              completar la el siguiente formulario para luego facilitarle la informacion a tu nuevo empleado.
            </p>
          </div>
        </div>
        <Register />
      </div>
      <Footer />
    </>
  );
};

export default RegisterStaff;
