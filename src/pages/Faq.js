import React from "react";

const Faq = () => {
  return (
    <div>
      <div>
        <section className="text-gray-700">
          <div className="container px-5 py-24 mx-auto">
            <div className="text-center mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
                PREGUNTAS FRECUENTES.
              </h1>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                Aquí obtendrá respuestas a sus cuestionantes.
              </p>
            </div>
            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
              <div className="w-full lg:w-1/2 px-4 py-2">
                <details className="mb-4">
                  <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    ¿Tienen delivery? ¿Cómo lo solicito?
                  </summary>
                  <span>
                    El servicio de delivery está disponible. para solicitarlo
                    debe ponerse en contacto con nosotros y si está disponible
                    coordinar la entrega de sus paquetes.
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4">
                    ¿Es seguro comprar por Internet?
                  </summary>
                  <span>
                    Sí, es seguro. Los sitios que venden productos por Internet
                    tienen muchas medidas de seguridad para que las compras sean
                    seguras.
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    ¿Cuánto voy a pagar por el envío?
                  </summary>
                  <span>
                    Lo que pagas de envío dependerá que tan lejos o cerca estes
                    de nuestra empresa.
                  </span>
                </details>
              </div>
              <div className="w-full lg:w-1/2 px-4 py-2">
                <details className="mb-4">
                  <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    ¿Qué sucede si no estoy presente en el momento de la
                    entrega?
                  </summary>
                  <span className="px-4 py-2">
                    Si el destinatario está ausente en el primer intento de
                    entrega, el paquete es devuelto a la oficina.
                    <br /> Según el transportista seleccionado, el paquete se
                    quedará en la oficina entre 5 y 10 días, o bien será enviado
                    para su entrega al día siguiente y el día después.
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    ¿En caso de tener problemas con mi pedido?
                  </summary>
                  <span className="px-4 py-2">
                    Nuestro servicio al cliente hace un seguimiento al envío
                    desde que se encuentra en el centro de distribución hasta
                    que sale del mismo.
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    ¿Qué medio de transporte utilizan para realizar las
                    entregas?
                  </summary>
                  <span className="px-4 py-2">
                    Gestionamos los envíos con motos.
                  </span>
                </details>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Faq;
