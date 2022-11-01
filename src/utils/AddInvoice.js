import axios from "axios";
import Swal from "sweetalert2";
import { url } from "../api/api";
import { AddStatePackage } from "./AddStatePackage";
import { ChangeLastState } from "./ChangeLastState";

const AddInvoice = async (tracking, setData, amount, lastState,idStaff) => {
  if (amount < 300) {
    Swal.fire({
      title: "¡Error!",
      text: "Tome en cuenta las consideraciones..",
      icon: "warning",
      confirmButtonText: "OK",
    });
    return;
  }

  try {
    await axios.post(`${url}/addInvoice`, {
      id_paquete: tracking,
      cantidad_a_pagar: amount,
    });
    Swal.fire({
      icon: "success",
      title: "Factura agregada!",
      text: "La factura fue realizada con éxito!",
    }).then(
      fetch(`${url}/getInvoicePending`)
        .then((response) => response.json())
        .then((data) => setData(data))
    );
    ChangeLastState(lastState, tracking);
    AddStatePackage("SUCURSAL",4,idStaff,tracking)
  } catch (error) {
    if (error.response) {
      Swal.fire({
        icon: "error",
        title: "¡Ups! Ha ocurrido un error",
        text: "Ha ocurrido un error al agregar la factura ",
        showConfirmButton: true,
      });
    }
  }
};

export default AddInvoice;
