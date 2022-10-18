import axios from "axios";
import Swal from "sweetalert2";
import { url } from "../api/api";

export const AddRol = async (idStaff, idRol) => {
  console.log(idStaff);
  console.log(idRol);
  if (idStaff === "") {
    Swal.fire({
      title: "¡Error!",
      text: "Ups! Ha ocurrido un error al agregar un nuevo rol a este usuario.",
      icon: "warning",
      confirmButtonText: "OK",
    });
    return;
  } else if (idRol === "" || idRol === undefined) {
    Swal.fire({
      title: "¡Error!",
      text: "Ups! No has selecionado ningun rol.",
      icon: "warning",
      confirmButtonText: "OK",
    });
    return;
  }
  try {
    await axios.post(`${url}/addStaffRol`, {
      id_personal: idStaff,
      id_roles: idRol,
    });
    Swal.fire({
      icon: "success",
      title: "¡Paquete pagado!",
      text: "Rol agregado con éxito!",
    });
  } catch (error) {
    if (error.response) {
      Swal.fire({
        icon: "error",
        title: "¡Ups! Ha ocurrido un error",
        text: "Este rol ya lo tiene el usuario",
        showConfirmButton: true,
      });
    }
  }
};
