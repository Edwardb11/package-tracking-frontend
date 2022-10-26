import { useState } from "react";
import { useEffect } from "react";

const useNavigation = (user) => {
  const [navigation, setNavigation] = useState([]);
  const rol = user?.rol;

  useEffect(() => {
    if (navigation.length !== 0) {
      return;
    }
    if (rol === undefined) {
      return setNavigation([
        { name: "Inicio", href: "/", current: true },
        { name: "Seguimiento", href: "/tracking", current: false },
        { name: "Mis paquetes", href: "/myPackages", current: false },
        { name: "Agregar", href: "/package", current: false },
      ]);
    } else if (
      rol[0]?.id_roles === 1 ||
      rol[1]?.id_roles === 1 ||
      rol[2]?.id_roles === 1
    ) {
      return setNavigation([
        { name: "Dashboard", href: "/admin/dashboard", current: true },
        { name: "Paquetes", href: "/admin/package", current: false },
        { name: "Personal", href: "/admin/staff", current: false },
      ]);
    } else if (
      rol[0]?.id_roles === 2 ||
      rol[1]?.id_roles === 2 ||
      rol[2]?.id_roles === 2
    ) {
      return setNavigation([
        { name: "Paquetes", href: "/admin/Package", current: false },
      ]);
    } else if (
      rol[0]?.id_roles === 3 ||
      rol[1]?.id_roles === 3 ||
      rol[2]?.id_roles === 3
    ) {
      return setNavigation([
        {
          name: "Pendientes de envio",
          href: "/admin/delivery",
          current: false,
        },
        {
          name: "Paquetes enviados",
          href: "/admin/packageShipped",
          current: false,
        },
      ]);
    }
    return () => {};
  }, [setNavigation, rol, navigation]);

  return navigation;
};

export default useNavigation;
