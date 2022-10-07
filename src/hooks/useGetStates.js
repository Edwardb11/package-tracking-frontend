import { useEffect, useState } from "react";
import { url } from "../api/api";

const useGetStates = () => {
  const [states, setStates] = useState({ data: [] });
  const [isEmpty, setIsEmpty] = useState(true);
  useEffect(() => {
    if (isEmpty) {
      fetch(`${url}/getState`)
        .then((response) => response.json())
        .then((data) => setStates(data));
      setIsEmpty(false);
    } else {
      return () => {};
    }
  }, [states, setStates, isEmpty]);
  return states;
};

export default useGetStates;
