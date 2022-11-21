// staffCardData
import addStaff from "../img/addStaff.png";
import viewStaff from "../img/viewStaff.png";
import Rol from "../img/rol.png";

// packageCardData
import manage from "../img/manage.png";
import Suport from "../img/suport.png";
import packagReady from "../img/packagReady.png";
import invoice from "../img/invoice.png";

export const packageCard = [
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

export const staffCard = [
  {
    id: 1,
    img: viewStaff,
    link: "/admin/listStaff",
    name: "Personal",
    description: "Todos los empleados de la empresa",
  },
  {
    id: 2,
    img: addStaff,
    link: "/admin/registerStaff",
    name: "Agregar personal",
    description: "Formulario para agregar un nuevo empleado    ",
  },
  {
    id: 3,
    img: Rol,
    link: "/admin/listStaffOld",
    name: "Personal inactivo",
    description: "Personales inactivos ",
  },
];
