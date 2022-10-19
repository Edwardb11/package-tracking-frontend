import { useEffect, useState } from "react";
import { url } from "../api/api";

const useGetPackagebyUser = (userId) => {
  const [data, setData] = useState({ data: [] });
  const [isEmpty, setIsEmpty] = useState(true);
  useEffect(() => {
    if (isEmpty) {
      fetch(`${url}/getPackage/${userId}`)
        .then((response) => response.json())
        .then((data) => setData(data));
      setIsEmpty(false);
    } else {
      return () => {};
    }
  }, [data, setData, isEmpty, userId]);
  return data;
};

export default useGetPackagebyUser;
