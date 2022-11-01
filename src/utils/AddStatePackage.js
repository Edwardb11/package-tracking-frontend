import axios from "axios";
import Swal from "sweetalert2";
import { url } from "../api/api";
import { ChangeLastState } from "./ChangeLastState";

export const AddStatePackage = async (
  locationP,
  stateP,
  idStaff,
  tracking,
  lastState
) => {
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
      activo: 1,
    });
    ChangeLastState(lastState, tracking);
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

export const packagesShipped = async (
  idStaff,
  tracking,
  locationP,
  setData,
  setShowModals
) => {
  Swal.fire({
    title: "¿Este paquete fue entregado?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    cancelButtonText: "Cancelar",
    confirmButtonText: "Si",
  }).then((result) => {
    if (result.isConfirmed) {
      try {
        axios.post(`${url}/addPackageStates`, {
          id_paquetes: tracking,
          id_estado: 7,
          id_personal: idStaff,
          ubicacion: locationP,
          activo: 1,
        });
        ChangeLastState(6, tracking);
        fetch(`${url}/getPendingShipping`)
          .then((response) => response.json())
          .then((data) => setData(data));
        setShowModals(false);

        Swal.fire({
          icon: "success",
          title: "Paquete entregado!",
        });
      } catch (error) {
        console.log(error);
        if (error.response) {
          Swal.fire({
            icon: "error",
            title: "¡Ups! Ha ocurrido un error",
            text: "Ha ocurrido un error al entregar  este paquete",
            showConfirmButton: true,
          });
        }
      }
    }
  });
};
export const sendPackage = async (
  idStaff,
  tracking,
  locationP,
  setData,
  setShowModals
) => {
  Swal.fire({
    title: "¿Estás seguro de enviar este paquete ?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    cancelButtonText: "Cancelar",
    confirmButtonText: "Si",
  }).then((result) => {
    if (result.isConfirmed) {
      try {
        axios.post(`${url}/addPackageStates`, {
          id_paquetes: tracking,
          id_estado: 6,
          id_personal: idStaff,
          ubicacion: locationP,
          activo: 1,
        });
        fetch(`${url}/getPendingShipping`)
          .then((response) => response.json())
          .then((data) => setData(data));
        setShowModals(false);
        ChangeLastState(5, tracking);

        Swal.fire({
          icon: "success",
          title: "Paquete enviado!",
        });
      } catch (error) {
        console.log(error);
        if (error.response) {
          Swal.fire({
            icon: "error",
            title: "¡Ups! Ha ocurrido un error",
            text: "Ha ocurrido un error al actualizar enviar este paquete",
            showConfirmButton: true,
          });
        }
      }
    }
  });
};
