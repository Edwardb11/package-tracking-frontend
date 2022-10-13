import { useEffect, useState } from "react";
import { url } from "../api/api";

const usePendingInvoice = () => {
  const [data, setData] = useState({ data: [] });
  const [isEmpty, setIsEmpty] = useState(true);
  useEffect(() => {
    if (isEmpty) {
      fetch(`${url}/getInvoicePending`)
        .then((response) => response.json())
        .then((data) => setData(data));
      setIsEmpty(false);
    } else {
      return () => {};
    }
  }, [data, setData, isEmpty]);
  return { data, setData };
};

export default usePendingInvoice;
