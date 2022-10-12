import manage from "../img/manage.png";
import Suport from "../img/suport.png";
import packagReady from "../img/packagReady.png";
import invoice from "../img/invoice.png";

export const packageCardData = [
  {
    id: 1,
    img: manage,
    link: "/admin/managePackage",
    name: "Gestionar paquetes",
    description: "Administrar los estados de los paquetes.",
  },
  {
    id: 2,
    img: invoice,
    link: "/admin/invoicePackage",
    name: "Facturar paquetes",
    description: "Calcular envio de cada paquete.",
  },
  {
    id: 3,
    img: Suport,
    link: "/tracking",
    name: "Soporte",
    description: "Soporte a los clientes, mediante seguimiento UPS.  ",
  },
  {
    id: 4,
    img: packagReady,
    link: "/admin/PackageReady",
    name: "Paquetes listos",
    description: "Lista de paquetes entregados.",
  },
];
