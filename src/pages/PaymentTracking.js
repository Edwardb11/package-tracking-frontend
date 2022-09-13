import React from "react";
import { useParams } from "react-router-dom";

const PaymentTracking = () => {
  const id = useParams();
  console.log(id);
  return <div>PaymentTracking</div>;
};

export default PaymentTracking;
