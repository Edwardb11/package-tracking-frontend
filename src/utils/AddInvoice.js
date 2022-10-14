import axios from "axios";
import Swal from "sweetalert2";
import { url } from "../api/api";

const AddInvoice = async (Tracking, amount) => {
  if (amount > 300) {
    Swal.fire({
      title: "¡Error!",
      text: "Tome en cuenta las consideraciones..",
      icon: "warning",
      confirmButtonText: "OK",
    });
    return;
  }
  console.log(amount, Tracking);
  //   try {
  //     await axios.post(`${url}/addInvoice`, {
  //       id_paquete: Tracking,
  //       cantidad_a_pagar: amount,
  //     });
  //     Swal.fire({
  //       icon: "success",
  //       title: "Factura agregada!",
  //       text: "La factura fue realizada con éxito!",
  //     });
  //   } catch (error) {
  //     if (error.response) {
  //       Swal.fire({
  //         icon: "error",
  //         title: "¡Ups! Ha ocurrido un error",
  //         text: "Ha ocurrido un error al agregar la factura ",
  //         showConfirmButton: true,
  //       });
  //     }
  //   }
};

export default AddInvoice;
