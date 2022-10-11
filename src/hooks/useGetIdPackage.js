import { useEffect, useState } from "react";
import { url } from "../api/api";

const useGetIdPackage = (tracking) => {
  const [data, setData] = useState({ state: [] });
  const [isEmpty, setIsEmpty] = useState(true);
  useEffect(() => {
    if (isEmpty) {
      fetch(`${url}/getPackageStates/${tracking}`)
        .then((response) => response.json())
        .then((data) => setData(data));
      setIsEmpty(false);
    } else {
      return () => {};
    }
  }, [data, setData, isEmpty, tracking]);
  return data;
};

export default useGetIdPackage;
