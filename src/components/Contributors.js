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
      <div className="mx-auto container relative text-center w-[100%] mt-[208px]">
        <div>
          <span className="text-[39px] leading-[52px] font-medium xl:text-[65px] xl:leading-[100px] xl:font-semibold">
            Contributors
          </span>
          <span className="inline-block w-2.5 h-2 ml-0.5">
            <img src={ellipse} />
          </span>
        </div>
        <div className="xl:text-xl text-lg leading-[15px] text-center mx-auto xl:leading-[30px] xl:font-normal w-[56%]">
          <p className="text-[24px] flex flex-wrap leading-9">
            They support products that simplify and automate decent mechanic
            processes saving time for activities.
          </p>
        </div>
        <div className="tags xl:flex block xl:flex-col space-y-8 xl:space-y-[109px] mx-auto w-[100%] mt-[164px]">
          <div className="justify-center xl:justify-between space-y-11 xl:space-y-0 flex flex-wrap w-[60%] xl:w-[72%] mx-auto mb-7 xl:mb-0">
            <a className=" hover:cursor-pointer">
              <img src={behance} />
            </a>
            <a className=" hover:cursor-pointer">
              <img src={google} />
            </a>
            <a className="hover:cursor-pointer">
              <img src={dribbble} />
            </a>
          </div>
          <div className="flex justify-center xl:justify-between space-y-14 xl:space-y-0 flex-wrap w-[70%] xl:w-[55%] mx-auto">
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
      ;
    </>
  );
};

export default Contributors;
