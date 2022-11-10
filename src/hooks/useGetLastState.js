import { useEffect, useState } from "react";
import { url } from "../api/api";

const useGetLasState = () => {
  const [data, setData] = useState({ state: [] });
  const [isEmpty, setIsEmpty] = useState(true);
  useEffect(() => {
    if (isEmpty) {
      fetch(`${url}/getLastStates`)
        .then((response) => response.json())
        .then((data) => setData(data));
      setIsEmpty(false);
    } else {
      return () => {};
    }
  }, [data, setData, isEmpty]);
  return data;
};

export default useGetLasState;
