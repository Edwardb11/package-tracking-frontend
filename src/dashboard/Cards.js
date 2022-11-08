import React from "react";
import Card from "./Card";

const Cards = () => {
  const data = [
    {
      id: 1,
      total: "0",
      title: "Total de paquetes",
    },
    {
      id: 2,
      total: "0",
      title: "Total de clientes ",
    },
    {
      id: 3,
      total: "0",
      title: "Total de empleados",
    },
    {
      id: 3,
      total: "0",
      title: "Total generado",
    },
  ];
  return (
    <div className="relative">
      <div className="flex flex-wrap justify-evenly">
        {data.map((items) => {
          return (
            <Card key={items.id} title={items.title} total={items.total} />
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
