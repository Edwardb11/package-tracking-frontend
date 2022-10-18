import { useEffect, useState } from "react";
import { url } from "../api/api";

const useGetRoles = () => {
  const [rol, setRol] = useState({ data: [] });
  const [isEmpty, setIsEmpty] = useState(true);
  useEffect(() => {
    if (isEmpty) {
      fetch(`${url}/getRoles`)
        .then((response) => response.json())
        .then((data) => setRol(data));
      setIsEmpty(false);
    } else {
      return () => {};
    }
  }, [rol, setRol, isEmpty]);
  return rol;
};

export default useGetRoles;
