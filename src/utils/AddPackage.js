import axios from "axios";
import Swal from "sweetalert2";
import { url } from "../api/api";

const AddPackage = async (
  ClientId,
  namePackage,
  weightPackage,
  quantityPackage,
  provinceLocated,
  houseNumberLocated,
  municipalityLocated,
  nameUser,
  lastNameUser,
  sexUser,
  phoneUser,
  houseDestination,
  destinationMunicipality,
  destinationProvince
) => {
  // Validation for package
  if (provinceLocated.trim() === " ") {
    Swal.fire({
      title: "¡Error!",
      text: "La provincia no puede estar vacía.",
      icon: "warning",
      confirmButtonText: "OK",
    });
    return;
  } else if (municipalityLocated.trim() === " ") {
    Swal.fire({
      title: "¡Error!",
      text: "El municipio no puede estar vacío.",
      icon: "warning",
      confirmButtonText: "OK",
    });
    return;
  } else if (houseNumberLocated <= 0) {
    Swal.fire({
      title: "¡Error!",
      text: "Numero de casa inválido",
      icon: "warning",
      confirmButtonText: "OK",
    });
    return;
  } else if (namePackage.trim() === " ") {
    Swal.fire({
      title: "¡Error!",
      text: "Nombre del paquete no puede estar vacío.",
      icon: "warning",
      confirmButtonText: "OK",
    });
    return;
  } else if (weightPackage.trim() === " ") {
    Swal.fire({
      title: "¡Error!",
      text: "Peso del paquete no puede estar vacío.",
      icon: "warning",
      confirmButtonText: "OK",
    });
    return;
  }

  //   validation for user
  else if (nameUser.trim() === " ") {
    Swal.fire({
      title: "¡Error!",
      text: "Nombre del usuario final no puede estar vacío.",
      icon: "warning",
      confirmButtonText: "OK",
    });
    return;
  } else if (lastNameUser.trim() === " ") {
    Swal.fire({
      title: "¡Error!",
      text: "Apellido del usuario final no puede estar vacío.",
      icon: "warning",
      confirmButtonText: "OK",
    });
    return;
  } else if (sexUser.trim() === " ") {
    Swal.fire({
      title: "¡Error!",
      text: "Sexo del usuario final no puede estar vacío.",
      icon: "warning",
      confirmButtonText: "OK",
    });
    return;
  } else if (phoneUser.trim() === " ") {
    Swal.fire({
      title: "¡Error!",
      text: "Celular del usuario final no puede estar vacío.",
      icon: "warning",
      confirmButtonText: "OK",
    });
    return;
  } else if (houseDestination <= 0) {
    Swal.fire({
      title: "¡Error!",
      text: "Número de  casa de destino  inválido.",
      icon: "warning",
      confirmButtonText: "OK",
    });
    return;
  } else if (destinationMunicipality.trim() === " ") {
    Swal.fire({
      title: "¡Error!",
      text: "El municipio de destino puede estar vacío.",
      icon: "warning",
      confirmButtonText: "OK",
    });
    return;
  } else if (destinationProvince.trim() === " ") {
    Swal.fire({
      title: "¡Error!",
      text: "La provincia de destino no puede estar vacíA.",
      icon: "warning",
      confirmButtonText: "OK",
    });
    return;
  }

  //   Concatenate drop and pick up location
  const locationPackage = `${provinceLocated} ${municipalityLocated} Casa:${houseNumberLocated}`;
  const locationDestination = `${destinationProvince} ${destinationMunicipality} Casa:${houseDestination}`;

  // Generate package code

  //   Logic to save end user and package (different paths related by id)
  try {
    let idUserFinal = "";
    await axios
      .post(`${url}/addEndUsers`, {
        nombres: nameUser,
        apellidos: lastNameUser,
        sexo: sexUser,
        ubicacion: locationDestination,
        celular: phoneUser,
      })
      .then((res) => {
        idUserFinal = res.data.id;
        return idUserFinal;
      });
    if (idUserFinal !== "") {
      await axios.post(`${url}/package`, {
        id_paquete: "aaHAKD",
        id_cliente: ClientId,
        id_usuario_final: idUserFinal,
        nombre: namePackage,
        peso: weightPackage,
        cantidad: quantityPackage,
        ubicacion: locationPackage,
      });
    }
    Swal.fire({
      icon: "success",
      title: "¡Paquete agregado!",
      text: "Paquete agregado con éxito!",
      showConfirmButton: true,
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

export default AddPackage;
