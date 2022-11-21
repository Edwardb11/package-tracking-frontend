import React from "react";
import DashClient from "../img/DashClient.webp";
import DashEmployee from "../img/DashEmployee.png";
import DashProfits from "../img/DashProfits.png";
import DashPackage from "../img/DashPackage.png";
const Card = ({ title, total, id }) => {
  console.log(id);

  const img =
    id === 1
      ? DashPackage
      : id === 2
      ? DashClient
      : id === 3
      ? DashEmployee
      : DashProfits;

  return (
    <div className="w-full mb-10 max-w-sm overflow-hidden rounded-lg  shadow-md duration-300 hover:shadow-xl bg-zinc-50">
      <img
        src={img}
        alt={title}
        className="mx-auto mt-8 h-16 w-16 text-green-400"
      />

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
