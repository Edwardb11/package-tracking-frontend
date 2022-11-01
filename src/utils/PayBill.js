import axios from "axios";
import Swal from "sweetalert2";
import { url } from "../api/api";
import { AddStatePackage } from "./AddStatePackage";

const PayBill = async (paymentMethod, id, amount, AmountPay, tracking) => {
  if (amount < AmountPay) {
    Swal.fire({
      title: "¡Error!",
      text: "La cantidad proporcionada a pagar es menor a la que debe pagar, verifique.",
      icon: "warning",
      confirmButtonText: "OK",
    });
    return;
  } else if (amount > AmountPay) {
    Swal.fire({
      title: "¡Error!",
      text: "La cantidad proporcionada a pagar es mayor a la que debe pagar, verifique.",
      icon: "warning",
      confirmButtonText: "OK",
    });
    return;
  }
  try {
    await axios.post(`${url}/paymentTransaction`, {
      id_metodo_de_pago: paymentMethod,
      id_factura: id,
      monto: amount,
    });
    AddStatePackage("BILL: Pago de usuario", 5, 0, tracking, 4);
    Swal.fire({
      icon: "success",
      title: "¡Paquete pagado!",
      text: "¡Transacción realizada con éxito!",
    });
  } catch (error) {
    if (error.response) {
      Swal.fire({
        icon: "error",
        title: "¡Ups! Ha ocurrido un error",
        text: "Ha ocurrido un error al realizar la transacción",
        showConfirmButton: true,
      });
    }
  }
};

export default PayBill;
