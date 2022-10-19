import { useEffect, useState } from "react";
import { url } from "../api/api";

const useGetTranssation = () => {
  const [transation, setData] = useState({ transation: [] });
  const [isEmpty, setIsEmpty] = useState(true);
  useEffect(() => {
    if (isEmpty) {
      fetch(`${url}/getPackagePaid`)
        .then((response) => response.json())
        .then((data) => setData(data));
      setIsEmpty(false);
    } else {
      return () => {};
    }
  }, [transation, setData, isEmpty]);
  return transation;
};

export default useGetTranssation;
