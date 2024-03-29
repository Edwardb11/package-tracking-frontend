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
        { name: "Seguimiento", href: "/tracking", current: false },
        { name: "Paquetes", href: "/myPackages", current: false },
        { name: "Nuevo Paquete", href: "/package", current: false },
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
        { name: "Delivery", href: "/admin/actionsDelivery", current: false },
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
          name: "Delivery",
          href: "/admin/actionsDelivery",
          current: false,
        },
      ]);
    }
    return () => {};
  }, [setNavigation, rol, navigation]);

  return navigation;
};

export default useNavigation;
