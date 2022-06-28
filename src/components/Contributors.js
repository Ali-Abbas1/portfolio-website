import React from "react";
import ellipse from "../images/ellipse.svg";
import behance from "../images/behance.svg";
import google from "../images/google.svg";
import dribbble from "../images/dribbble.svg";
import uplabs from "../images/uplabs.svg";
import design from "../images/99design.svg";
import rectangle from "../images/Rectangle2.svg";

const Contributors = () => {
  return (
    <>
      <div className="mx-auto container relative text-center w-[100%] mt-[90px] sm:mt-[208px] z-10">
        <div>
          <span className="text-[24px] leading-[35px] sm:text-[39px] sm:leading-[52px] font-medium xl:text-[65px] xl:leading-[100px] xl:font-semibold">
            Contributors
          </span>
          <span className="inline-block w-1.5 h-1 sm:w-2.5 sm:h-2 ml-0.5">
            <img src={ellipse} />
          </span>
        </div>
        <div className="xl:text-xl text-lg leading-[15px] text-center mx-auto xl:leading-[30px] xl:font-normal w-[100%] sm:w-[56%]">
          <p className="text-[18px] md:text-[25px] md:w-[70%] mx-auto w-[80%] sm:w-[100%] leading-6 sm:text-[24px] flex flex-wrap sm:leading-9">
            They support products that simplify and automate decent mechanic
            processes saving time for activities.
          </p>
        </div>
        <div className="tags flex flex-col lg:space-y-14 xl:space-y-[109px] mx-auto w-[100%] mt-[111px]">
          <div className="flex flex-col md:flex-row justify-between w-[244px] space-y-7 sm:w-[33%] sm:justify-center xl:justify-between sm:space-y-2 md:space-y-6 xl:space-y-0 sm:flex sm:flex-wrap md:w-[35%] xl:w-[72%] mx-auto mb-14 sm:mb-7 md:mb-[2.75rem] lg:mb-[-10px] xl:mb-0">
            <a className=" hover:cursor-pointer">
              <img src={behance} />
            </a>
            <a className=" hover:cursor-pointer">
              <img src={google} />
            </a>
            <a className="hover:cursor-pointer">
              <img src={dribbble}/>
            </a>
          </div>
          <div className="flex flex-col lg:flex-row w-[246px] space-y-14 sm:flex sm:justify-center xl:justify-between xl:space-y-0 sm:space-y-8 md:space-y-8 flex-wrap sm:w-[33%] xl:w-[55%] mx-auto">
            <a className="hover:cursor-pointer">
              <img src={uplabs} />
            </a>
            <a className="hover:cursor-pointer">
              <img src={design} />
            </a>
          </div>
        </div>
        <img src={rectangle} className="absolute top-0 left-0 -z-10" />
      </div>
    </>
  );
};

export default Contributors;
