import Swal from "sweetalert2";

const AddPackage = async (
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
      text: "La provincia no puede estar vacia.",
      icon: "warning",
      confirmButtonText: "OK",
    });
    return;
  } else if (municipalityLocated.trim() === " ") {
    Swal.fire({
      title: "¡Error!",
      text: "El municipio no puede estar vacio.",
      icon: "warning",
      confirmButtonText: "OK",
    });
    return;
  } else if (houseNumberLocated.trim() === " ") {
    Swal.fire({
      title: "¡Error!",
      text: "Numero de casa requerido.",
      icon: "warning",
      confirmButtonText: "OK",
    });
    return;
  } else if (houseNumberLocated.trim() <= 0) {
    Swal.fire({
      title: "¡Error!",
      text: "Numero de casa invalido",
      icon: "warning",
      confirmButtonText: "OK",
    });
    return;
  } else if (namePackage.trim() === " ") {
    Swal.fire({
      title: "¡Error!",
      text: "Nombre del paquete no puede estar vacio.",
      icon: "warning",
      confirmButtonText: "OK",
    });
    return;
  } else if (weightPackage.trim() === " ") {
    Swal.fire({
      title: "¡Error!",
      text: "Nombre del paquete no puede estar vacio.",
      icon: "warning",
      confirmButtonText: "OK",
    });
    return;
  } else if (quantityPackage.trim() === " ") {
    Swal.fire({
      title: "¡Error!",
      text: "Nombre del paquete no puede estar vacio.",
      icon: "warning",
      confirmButtonText: "OK",
    });
    return;
  }

  //   validation for user
  else if (nameUser.trim() === " ") {
    Swal.fire({
      title: "¡Error!",
      text: "Nombre del usuario final no puede estar vacio.",
      icon: "warning",
      confirmButtonText: "OK",
    });
    return;
  } else if (lastNameUser.trim() === " ") {
    Swal.fire({
      title: "¡Error!",
      text: "Apellido del usuario final no puede estar vacio.",
      icon: "warning",
      confirmButtonText: "OK",
    });
    return;
  } else if (sexUser.trim() === " ") {
    Swal.fire({
      title: "¡Error!",
      text: "Sexo del usuario final no puede estar vacio.",
      icon: "warning",
      confirmButtonText: "OK",
    });
    return;
  } else if (phoneUser.trim() === " ") {
    Swal.fire({
      title: "¡Error!",
      text: "Celular del usuario final no puede estar vacio.",
      icon: "warning",
      confirmButtonText: "OK",
    });
    return;
  } else if (houseDestination.trim() === " ") {
    Swal.fire({
      title: "¡Error!",
      text: "Numero de casa de destino requerido.",
      icon: "warning",
      confirmButtonText: "OK",
    });
    return;
  } else if (destinationMunicipality.trim() === " ") {
    Swal.fire({
      title: "¡Error!",
      text: "El municipio no puede estar vacio.",
      icon: "warning",
      confirmButtonText: "OK",
    });
    return;
  } else if (destinationProvince.trim() === " ") {
    Swal.fire({
      title: "¡Error!",
      text: "La provincia no puede estar vacia.",
      icon: "warning",
      confirmButtonText: "OK",
    });
    return;
  }
};

export default AddPackage;
