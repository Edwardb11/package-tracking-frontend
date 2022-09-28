import React from "react";
import Card from "./Card";
import staffAdd from "../../img/staffAdd.webp";

const Cards = () => {
  return (
    <Card
      img={staffAdd}
      link={"/admin/registerStaff"}
      shortName={"Agregar"}
      name={"Agregar personal"}
      description={"Lorem"}
    />
  );
};

export default Cards;
