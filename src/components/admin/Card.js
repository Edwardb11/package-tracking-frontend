import React from "react";
import { Link } from "react-router-dom";

const Card = ({ img, link, description, shortName, name }) => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.tailgrids.com/tailgrids-fallback.css"
      />
      <section className="pt-20 lg:pt-[120px] pb-10 lg:pb-20 ">
        <div className="container bg-[#F3F4F6]">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 xl:w-1/4 px-4">
              <div className="bg-white rounded-lg overflow-hidden mb-10">
                <img src={img} alt="images" className="w-full" />
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
                  <Link
                    className=" inline-block py-2 px-7  border border-[#E5E7EB] rounded-full  text-base text-body-color font-medium hover:border-primary hover:bg-primary hover:text-white transition
                 ">
                    {shortName}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;
