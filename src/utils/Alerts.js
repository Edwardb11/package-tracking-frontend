import React from "react";

const Alerts = ({ state, alert }) => {
  return (
    <div>
      {state?.length === 0 && (
        <div className="flex justify-center text-red-900 font-bold">
          <h2 className=" px-6 p-2  text-md whitespace-nowrap p-4">
          {alert}
          </h2>
        </div>
      )}
    </div>
  );
};

export default Alerts;
