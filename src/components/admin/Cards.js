import React from "react";
import { cardData } from "../../utils/cardData.js";
import Card from "./Card.js";
const Cards = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.tailgrids.com/tailgrids-fallback.css"
      />
      <section className="pt-10 lg:pt-[120px] pb-10 lg:pb-20 justify-center ">
        <div className="container shadow-xl ">
          <div className="flex flex-wrap justify-evenly -mx-4">
            {cardData.map((items) => {
              return <Card key={items.id} {...items} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Cards;
