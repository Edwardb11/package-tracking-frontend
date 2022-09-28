import addStaff from "../img/addStaff.png";
import viewStaff from "../img/viewStaff.png";
import deleteStaff from "../img/deleteStaff.png";
import Rol from "../img/rol.png";

export const cardData = [
  {
    id: 1,
    img: viewStaff,
    link: "/admin/registerStaff",
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
    description: "Editar roles de los empleados",
  },
  {
    id: 4,
    img: deleteStaff,
    link: "/admin/registerStaff",
    name: "Eliminar personal",
    description: "Eliminar empleados que ya no esten en la empresa",
  },
];
