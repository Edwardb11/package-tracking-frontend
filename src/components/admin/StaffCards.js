import React from "react";
import { staffCardData } from "../../utils/staffCardData.js";
import Card from "./Card.js";
const StaffCards = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.tailgrids.com/tailgrids-fallback.css"
      />
      <section className="pt-10">
        <div className="container shadow-xl ">
          <div className="flex flex-wrap justify-evenly -mx-4">
            {staffCardData.map((items) => {
              return <Card key={items.id} {...items} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default StaffCards;
