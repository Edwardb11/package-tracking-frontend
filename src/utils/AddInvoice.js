import axios from "axios";
import Swal from "sweetalert2";
import { url } from "../api/api";

const AddInvoice = async (Tracking, setData, amount) => {
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
      id_paquete: Tracking,
      cantidad_a_pagar: amount,
    });
    Swal.fire({
      icon: "success",
      title: "Factura agregada!",
      text: "La factura fue realizada con éxito!",
    });

    let timerInterval;
    Swal.fire({
      icon: "success",
      title: "¡Estamos actualizando todo para usted!!",
      text: "Espere un momento, Por favor.",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const b = Swal.getHtmlContainer().querySelector("b");
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft();
        }, 2000);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then(
      fetch(`${url}/getInvoicePending`)
        .then((response) => response.json())
        .then((data) => setData(data))
    );

    setData();
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
