import React from "react";
import QuickAccess from "./QuickAccess";

const LandingPage = () => {
  return (
    <>
      <QuickAccess />
      <div className="py-20 bg-white">
        <div className="flex flex-col px-8 mx-auto space-y-12 max-w-7xl xl:px-12">
          <div className="relative">
            <h2 className="w-full text-3xl font-bold text-center sm:text-4xl md:text-5xl">
              {" "}
              Seguimiento de paquetes
            </h2>
            <p className="w-full py-8 mx-auto -mt-2 text-lg text-center text-gray-700 intro sm:max-w-3xl">
              Transporte de alta calidad te ayuda a completar la información de
              rastreo y mejora la experiencia de compra de los clientes.
            </p>
          </div>
          <div className="flex flex-col mb-8 animated fadeIn sm:flex-row">
            <div className="flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last">
              <img
                className="rounded-lg"
                src="https://infos-geek.com/wp-content/uploads/2021/06/1f69775e45a9d5ff736e9bf0ae8cad06.jpe"
                alt=""
              />
            </div>
            <div className="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-16">
              <p className="mb-2 text-sm font-semibold leading-none text-left text-indigo-600 uppercase">
                Seguimiento de los paquetes
              </p>
              <h3 className="mt-2 text-2xl sm:text-left md:text-4xl">
                Información de los paquetes
              </h3>
              <p className="mt-5 text-lg text-gray-700 text md:text-left">
                Le facilitamos ver la información de cada moviento de sus
                paquetes cuando lo rastree. Debido a que asignamos un número de
                guía a cada paquete, usted conocerá el progreso de su envío.
              </p>
            </div>
          </div>
          <div className="flex flex-col mb-8 animated fadeIn sm:flex-row">
            <div className="flex items-center mb-8 sm:w-1/2 md:w-5/12">
              <img
                className="rounded-lg shadow-xl"
                src="https://www.eleconomista.com.mx/__export/1634342605203/sites/eleconomista/img/2021/10/14/shutterstock_1383587078_xconvertedx_copia.jpg_328101988.jpg"
                alt=""
              />
            </div>
            <div className="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pl-16">
              <p className="mb-2 text-sm font-semibold leading-none text-left text-indigo-600 uppercase">
                Agregar paquetes
              </p>
              <h3 className="mt-2 text-2xl sm:text-left md:text-4xl">
                Envíos Nacionales
              </h3>
              <p className="mt-5 text-lg text-gray-700 text md:text-left">
                Por mucho que busques no encontrarás en el mercado unos precios
                tan económicos para el envío de paquetes como aqui. El ahorro en
                el transporte de mercancías se convierte en uno de los grandes
                atractivos de esta plataforma.
              </p>
            </div>
          </div>
          <div className="flex flex-col mb-8 animated fadeIn sm:flex-row">
            <div className="flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last">
              <img
                className="rounded-lg shadow-xl"
                src="https://cdn.shopify.com/s/files/1/0613/0076/9014/products/SOPORTEMENSUAL_65176124-3126-4bf8-b517-3d31ff398555_1024x1024.png?v=1648210716"
                alt=""
              />
            </div>
            <div className="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-16">
              <p className="mb-2 text-sm font-semibold leading-none text-left text-indigo-600 uppercase">
                Soporte{" "}
              </p>
              <h3 className="mt-2 text-2xl sm:text-left md:text-4xl">
                Tienes problemas con algún paquete?
              </h3>
              <p className="mt-5 text-lg text-gray-700 text md:text-left">
                Llama a nuestro centro de soporte.
                <button className="bg-orange-700 text-white">
                  + 1 (829) 444 - 3323
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
