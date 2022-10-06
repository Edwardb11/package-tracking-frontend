import { useEffect, useState } from "react";
import { url } from "../api/api";

const useGetPackage = () => {
  const [data, setData] = useState({ package:[] });
  const [isEmpty, setIsEmpty] = useState(true);
  useEffect(() => {
    if (isEmpty) {
      fetch(`${url}/getPackageAdmin`)
        .then((response) => response.json())
        .then((data) => setData(data));
      setIsEmpty(false);
    } else {
      return () => {};
    }
  }, [data, setData, isEmpty]);
  return { data, setData };
};

export default useGetPackage;
