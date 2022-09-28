import React from "react";
import { Link } from "react-router-dom";

const Card = ({ img, link, description, shortName, name }) => {
  return (
    <>
      <div className="w-full md:w-1/2 xl:w-1/4 px-4">
        <div className="bg-white rounded-lg overflow-hidden mb-10">
          <Link to={link}>
            <img src={img} alt="images" className="w-full" />
          </Link>
          <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
            <h3>
              <Link
                to={link}
                className="font-semibold text-dark text-xl sm:text-[22px] md:text-xllg:text-[22px] xl:text-xl 2xl:text-[22px]  mb-4 block  hover:text-primary
                    ">
                {name}
              </Link>
            </h3>
            <p className="text-base text-body-color leading-relaxed mb-7">
              {description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
