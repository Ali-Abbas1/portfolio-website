import React from "react";
import ellipse from "../images/ellipse.svg";
import rectangle from "../images/Rectangle.svg";
import rectangle2 from "../images/Rectangle2.svg";

const AboutMe = () => {
  return (
    <>
      <div className="mx-auto container relative sm:mt-[150px] lg:mt-[410px] text-center">
        <span className="text-[40px] leading-[36px] font-medium lg:text-[65px] lg:leading-[100px] lg:font-semibold ">
          About me
        </span>
        <span className="inline-block w-2.5 h-2 ml-0.5">
          <img src={ellipse} />
        </span>
        <p className=" font-normal text-lg leading-[25px] w-[30%] lg:text-xl lg:leading-[30px] flex-wrap mx-auto lg:w-[50%] lg:mt-[5px]">
          I'm Justin Vaccaro and i do web design, Graphic Design, User
          Experiences. habitant et netus et malesuada fames ac turpis egestas.
          Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit
          amet.
        </p>
        <div className="absolute top-[-980px] right-0">
          <img src={rectangle} />
        </div>
        <img
          src={rectangle2}
          className="absolute lg:top-[144px] xl:top-[570px] left-0"
        />
      </div>
    </>
  );
};

export default AboutMe;
