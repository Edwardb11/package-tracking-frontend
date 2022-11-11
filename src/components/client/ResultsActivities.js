import React from "react";
import convertDate from "../../utils/convertDate";

const ResultsActivities = ({ states }) => {
  return (
    <div>
      <h3 className="font-medium text-gray-900 text-left px-6 bg-gray-100 py-3">
        Actividad reciente
      </h3>
      <div className="mt-5 w-full text-left  overflow-hidden text-sm">
        {states.map((item, key) => {
          return (
            <span
              key={key}
              className="border-gray-100  text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
              <img
                src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                alt=""
                className="rounded-full h-6 shadow-md inline-block mr-2"
              />
              <span className="font-bold">{item?.estado?.nombre} </span>{" "}
              actividad agregada por
              <span className="font-bold">
                {" "}
                {item?.personal?.id_personal === 0
                  ? "CLIENTE"
                  : item?.personal.nombres}
              </span>
              <span className="flex text-gray-500 text-xs text-right justify-end">
                {" "}
                {convertDate(item.creado)}
              </span>
              <hr />
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default ResultsActivities;
