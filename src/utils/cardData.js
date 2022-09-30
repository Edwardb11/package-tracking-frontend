import addStaff from "../img/addStaff.png";
import viewStaff from "../img/viewStaff.png";
import Rol from "../img/rol.png";

export const cardData = [
  {
    id: 1,
    img: viewStaff,
    link: "/admin/listStaff",
    name: "Ver personal",
    description: "Listar todos los empleados en la empresa",
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
    link: "/admin/registerStaff",
    name: "Editar roles",
    description: "Agregar o Editar roles de los empleados",
  },
];
