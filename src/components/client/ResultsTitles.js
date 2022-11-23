import React from "react";

const ResultsTitles = ({ titles }) => {
  return (
    <div className="flex  text-gray-700 font-bold items-center bg-gray-100">
      <p className="  hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in text-sm text-center w-full py-3">
        {titles[0]}
      </p>
      <p className=" hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in text-sm text-center w-full py-3">
        {titles[1]}
      </p>
      <p className=" hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in x text-sm text-center w-full py-3">
        {titles[2]}
      </p>
      <p className=" hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in text-sm text-center w-full py-3">
        {titles[3]}
      </p>
    </div>
  );
};

export default ResultsTitles;
