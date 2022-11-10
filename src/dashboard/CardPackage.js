import React from "react";

const CardPackage = ({ title, description }) => {
  return (
    <div className="border-b pl-3 mb-4">
      <p className="text-base font-medium text-gray-800 leading-none">
        {title}
      </p>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
};

export default CardPackage;
