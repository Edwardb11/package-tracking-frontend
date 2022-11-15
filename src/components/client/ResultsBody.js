import React from "react";

const ResultsBody = ({ title1, title2, title3, title4 }) => {
  return (
    <div className="flex justify-between items-center">
      <p className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">
        {title1}
      </p>
      <p className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">
        {title2}
      </p>
      <p className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">
        {title3}
      </p>
      <p className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">
        {title4}
      </p>
    </div>
  );
};

export default ResultsBody;
