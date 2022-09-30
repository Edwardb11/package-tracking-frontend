import axios from "axios";
import Swal from "sweetalert2";
import { url } from "../api/api";
import useGetStaff from "../hooks/useGetStaff";

export const addStaff = async (
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

  //   constants for ref staff
  let idStaff = "";
  //   POST staff
  try {
    await axios
      .post(`${url}/registerStaff`, {
        correo_electronico: email,
        contraseña: password,
        nombres: name,
        apellidos: lastName,
        sexo: sex,
        niveles_estudios: studyLevels,
        fecha_nacimiento: birthDate,
        celular: phone,
      })
      .then((res) => {
        idStaff = res.data.id;
        return idStaff;
      });
    if (idStaff !== "") {
      await axios.post(`${url}/addStaffRol`, {
        id_personal: idStaff,
        id_roles: getRol,
      });
    }
    Swal.fire({
      icon: "success",
      title: "Empleado agregado!",
      text: "Empleado agregado con éxito!",
      showConfirmButton: true,
    });
  } catch (error) {
    if (error.response) {
      Swal.fire({
        icon: "error",
        title: "¡Ups! Ha ocurrido un error",
        text: "Ha ocurrido un error al agregar el personal",
        showConfirmButton: true,
      });
    }
  }
};

export const removeStaff = async (id, setData) => {
  Swal.fire({
    title: "¿Estás seguro de eliminar este personal ?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    cancelButtonText: "Cancelar",
    confirmButtonText: "Si",
  }).then((result) => {
    if (result.isConfirmed) {
      axios.delete(`${url}/removeStaff/${id}`);
      fetch(`${url}/getStaff`)
        .then((response) => response.json())
        .then((data) => setData(data));
    }
  });
};
