import Swal from "sweetalert2";

const addStaff = (
  name,
  lastName,
  sex,
  phone,
  birthDate,
  email,
  password,
  studyLevels,
  getRol
) => {
  if (name.trim() === " ") {
    Swal.fire({
      title: "¡Error!",
      text: "El nombre del empleado no puede estar vacía.",
      icon: "warning",
      confirmButtonText: "OK",
    });
  } else if (lastName.trim() === " ") {
    Swal.fire({
      title: "¡Error!",
      text: "El apellido del empleado no puede estar vacío.",
      icon: "warning",
      confirmButtonText: "OK",
    });
    return;
  } else if (email.trim() === " ") {
    Swal.fire({
      title: "¡Error!",
      text: "El correo electronico del empleado no puede estar vacío.",
      icon: "warning",
      confirmButtonText: "OK",
    });
    return;
  } else if (password.trim().length < 6) {
    Swal.fire({
      icon: "error",
      title: "Contraseña débil",
      text: "La contraseña debe ser mayor de 6 caracteres.",
      showConfirmButton: true,
    });
    return;
  }
};

export default addStaff;
