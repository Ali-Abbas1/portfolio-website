import React from "react";
import logo from "../images/logo-1.svg";
import facebook from "../images/facebook1.svg";
import instagram from "../images/instagram1.svg";
import twitter from "../images/twitter1.svg";
import linkedin from "../images/instagram2.svg";

const Contact = () => {
  return (
    <>
      <div className="mx-auto container text-center flex flex-col flex-wrap mt-[60px] md:mt-[90px]">
        <h1 className="text-[22px] leading-[35px] sm:text-[40px] sm:leading-[60px] xl:text-[65px] xl:leading-[100px] text-[#FD5956] font-semibold">
          Contact.
        </h1>
        <p className="text-[18px] md:text-[30px] leading-[25px] md:leading-[40px] sm:text-lg sm:leading-[20px] xl:text-xl xl:leading-[30px] w-[80%] md:w-[70%] mx-auto mt-[20px]">
          Truth is a deep kindness that teaches us to be content in our everyday
          life and share with the people the same happiness. the feeling of
          sunday is the same everywhere: heavy, melancholy, standing still.
        </p>
        <img
          src={logo}
          className="mt-[120px] w-[60%] md:w-[263px] h-[126px] mx-auto"
        />
        <div className="social-link flex w-[50%] flex-wrap justify-between mx-auto sm:w-[240px] mt-[100px]">
          <a className=" hover:cursor-pointer">
            <img src={facebook} />
          </a>
          <a className=" hover:cursor-pointer">
            <img src={instagram} />
          </a>
          <a className=" hover:cursor-pointer">
            <img src={twitter} />
          </a>
          <a className=" hover:cursor-pointer">
            <img src={linkedin} />
          </a>
        </div>
        <p className=" text-[14px] sm:text-xl leading-[30px] text-center font-normal mt-[40px] pb-7">
          © 2021 AbbVie Inc. . All rights reserved
        </p>
      </div>
    </>
  );
};

export default Contact;
