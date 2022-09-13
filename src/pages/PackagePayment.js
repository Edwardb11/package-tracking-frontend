import React from 'react'
import { useParams } from 'react-router-dom';

const PackagePayment = () => {
  const id = useParams();
  console.log(id);
  return (
    <div>PackagePayment</div>
  )
}

export default PackagePayment