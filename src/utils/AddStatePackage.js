import axios from "axios";
import Swal from "sweetalert2";
import { url } from "../api/api";

export const AddStatePackage = async (locationP, stateP, idStaff, tracking) => {
  if (locationP === "") {
    Swal.fire({
      icon: "error",
      title: "Ubicación inválido",
      text: "Por favor introduzca una ubicación válido.",
      showConfirmButton: true,
    });
    return;
  }
  if (stateP === "") {
    Swal.fire({
      icon: "error",
      title: "Estado inválido",
      text: "Por favor selecione un estado válido.",
      showConfirmButton: true,
    });
    return;
  }
  try {
    await axios.post(`${url}/addPackageStates`, {
      id_paquetes: tracking,
      id_estado: stateP,
      id_personal: idStaff,
      ubicacion: locationP,
    });
    Swal.fire({
      icon: "success",
      title: "Estado agregado!",
      text: "El estado fue actualizado con éxito!",
    });
  } catch (error) {
    console.log(error);
    if (error.response) {
      Swal.fire({
        icon: "error",
        title: "¡Ups! Ha ocurrido un error",
        text: "Ha ocurrido un error al actualizar el estadp la transacción",
        showConfirmButton: true,
      });
    }
  }
};
