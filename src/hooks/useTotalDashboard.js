import { useEffect, useState } from "react";
import { url } from "../api/api";

const useTotalDashboard = () => {
  const [data, setData] = useState({ data: [] });
  const [isEmpty, setIsEmpty] = useState(true);
  useEffect(() => {
    if (isEmpty) {
      fetch(`${url}/getCountTotal`)
        .then((response) => response.json())
        .then((data) => setData(data));
      setIsEmpty(false);
    } else {
      return () => {};
    }
  }, [data, setData, isEmpty]);
  return data;
};

export default useTotalDashboard;
