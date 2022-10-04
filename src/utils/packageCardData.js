import addStaff from "../img/addStaff.png";
import viewStaff from "../img/viewStaff.png";
import Rol from "../img/rol.png";

export const packageCardData = [
  {
    id: 1,
    img: viewStaff,
    link: "/admin/listStaff",
    name: "Paquetes",
    description: "Listar todos los empleados en la empresa",
  },
  {
    id: 2,
    img: addStaff,
    link: "/admin/registerStaff",
    name: "Seguimiento UPS",
    description: "Formulario para agregar un nuevo empleado    ",
  },
  {
    id: 3,
    img: Rol,
    link: "/admin/registerStaff",
    name: "Agregar personal",
    description: "Agregar o Editar roles de los empleados",
  },
];
