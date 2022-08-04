import React from "react";

const About = () => {
  return (
    <>
      <div className=" ">
        <section className="relative">
          <div
            className="mt-96  w-full h-full bg-center bg-cover"
            style={{ backgroundImage: "url(fondo.png)" }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            />
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0px)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x={0}
              y={0}
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              />
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-blueGray-200">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                        alt="..."
                        src="16-3-crecimiento-paqueteria.jpg"
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-20 max-w-150-px"
                      />
                    </div>
                  </div>
                  {/**/}{" "}
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                      {/*<button class="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150" type="button">
            Connect
          </button> */}
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                    Sistema De paquetería
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400" />
                    Republica Dominicana
                  </div>
                  <div className="mb-2 text-blueGray-600 mt-10">
                    <i className="fa-solid fa-phone mr-2 text-lg text-blueGray-400" />
                    829-462-9992 - 849-856-4014
                  </div>
                  <div className="mb-2 text-blueGray-600">
                    <i className="fas fa-message mr-2 text-lg text-blueGray-400" />
                    Somos una empresa comprometida con sus clientes para darle
                    el mejor servicio.
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                        Ser la empresa líder en el ramo de servicios de
                        paquetería, reconocida en el país como confiable por sus
                        mejores prácticas, por sus procesos de excelencia, por
                        sus niveles de competitividad y por la calidad de sus
                        productos y servicios, en un mundo que de forma
                        constante se comunica de manera diferente.
                      </p>
                      {/*  <a href="#pablo" class="font-normal text-pink-500">Show more</a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
