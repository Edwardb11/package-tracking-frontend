import React from "react";
import useTotalDashboard from "../hooks/useTotalDashboard";
import Card from "./Card";

const Cards = () => {
  /* Calling the useTotalDashboard hook and storing the data in a variable called data. */
  const data = useTotalDashboard();
  return (
    <div className="relative">
      <div className="flex flex-wrap justify-evenly">
        {data.data.map((items) => {
          return (
            <Card key={items.id} title={items.title} total={items.total} />
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
