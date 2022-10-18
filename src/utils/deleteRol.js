import Swal from "sweetalert2";

export const removeRol = async (idStaff, idRol) => {
  Swal.fire({
    title: "¿Estás seguro de eliminar este rol a este personal ?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    cancelButtonText: "Cancelar",
    confirmButtonText: "Si",
  }).then((result) => {
    if (result.isConfirmed) {
    }
  });
};
