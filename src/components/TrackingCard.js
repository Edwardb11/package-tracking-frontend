import React from "react";

const TrackingCard = () => {
  return (
    <>
      <div className="container mx-auto my-40">
        <div>
          <div className="bg-white relative shadow rounded-lg w-5/6 md:w-4/6  lg:w-3/6 xl:w-2/6 mx-auto">
            <div className="flex justify-center">
              <img
                src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                alt=""
                className="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110"
              />
            </div>
            <div className="mt-16">
              <h1 className="font-bold text-center text-3xl text-gray-900">
                Nombre del paquete
              </h1>
              <p className="text-center text-sm text-gray-400 font-medium">
                Tipo de paquete
              </p>

              <div className="flex justify-between items-center my-5 px-6">
                <p className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">
                  Cantidad:
                </p>
                <p
                  href=""
                  className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3"
                >
                  Peso:
                </p>
                <p className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">
                  Destino:
                </p>
                <p className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">
                  Usuario Final:
                </p>
                <p className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">
                  Celular:
                </p>
              </div>
              <div className="w-full">
                <h3 className="font-medium text-gray-900 text-left px-6">
                  Actividad reciente
                </h3>
                <div className="mt-5 w-full flex flex-col items-center overflow-hidden text-sm">
                  <span className="border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                    <img
                      src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                      alt=""
                      className="rounded-full h-6 shadow-md inline-block mr-2"
                    />
                    En reparto
                    <span className="font-bold"> Pablo Nuñez</span>
                    <span className="text-gray-500 text-xs"> 24 min ago</span>
                  </span>
                  <span className="border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                    <img
                      src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                      alt=""
                      className="rounded-full h-6 shadow-md inline-block mr-2"
                    />
                    Envio en curso
                    <span className="font-bold"> Ramon Caceres</span>
                    <span className="text-gray-500 text-xs"> 42 min ago</span>
                  </span>
                  <span className="border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                    <img
                      src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                      alt=""
                      className="rounded-full h-6 shadow-md inline-block mr-2"
                    />
                    Envalijado
                    <span className="font-bold"> Ramon Caceres</span>
                    <span className="text-gray-500 text-xs"> 49 min ago</span>
                  </span>

                  <span className=" border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150 overflow-hidden">
                    <img
                      src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                      alt=""
                      className="rounded-full h-6 shadow-md inline-block mr-2"
                    />
                    Recogido
                    <span className="font-bold"> Ramon Caceres</span>
                    <span className="text-gray-500 text-xs"> 5 days ago</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrackingCard;
