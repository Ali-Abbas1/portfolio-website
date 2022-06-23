import React from "react";
import ellipse from "../images/ellipse.svg";
import rectangle from "../images/Rectangle.svg";

const AboutMe = () => {
  return (
    <>
      <div className="mx-auto container relative mt-[410px] text-center">
        <span className="text-[65px] leading-[100px] font-semibold ">
          About me
        </span>
        <span className="inline-block w-2.5 h-2 ml-0.5">
          <img src={ellipse} />
        </span>
        <p className=" font-normal text-xl leading-[30px] flex-wrap mx-auto w-[50%] mt-[5px]">
          I'm Justin Vaccaro and i do web design, Graphic Design, User
          Experiences. habitant et netus et malesuada fames ac turpis egestas.
          Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit
          amet.
        </p>
        <div className="absolute top-[-980px] right-0">
          <img src={rectangle} />
        </div>
      </div>
    </>
  );
};

export default AboutMe;
