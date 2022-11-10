import React from "react";

const Card = ({ title, total }) => {
  return (
    <div className="w-full mb-10 max-w-sm overflow-hidden rounded-lg  shadow-md duration-300 hover:shadow-xl bg-cyan-50">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto mt-8 h-16 w-16 text-green-400"
        viewBox="0 0 20 20"
        fill="currentColor">
        <path
          fillRule="evenodd"
          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"
        />
      </svg>
      <h1 className="mt-2 text-center text-2xl font-bold text-gray-500">
        {title}
      </h1>
      <p className="my-4 text-center  text-xl x text-sm text-gray-500">
        {total}
      </p>
    </div>
  );
};

export default Card;
