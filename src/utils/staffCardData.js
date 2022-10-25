import addStaff from "../img/addStaff.png";
import viewStaff from "../img/viewStaff.png";
import Rol from "../img/rol.png";

export const staffCardData = [
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
