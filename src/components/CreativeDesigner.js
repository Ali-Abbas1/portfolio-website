import React from "react";
import ellipse from "../images/ellipse.svg";
import Design from "../images/designer-image.svg";
import backgroundimage from "../images/accaro1.jpg";
import facebookimage from "../images/facebook.svg";
import insta from "../images/instagram.svg";
import twitter from "../images/twitter.svg";
import linkedin from "../images/linkedin.svg";
import vector from "../images/vector.svg";

const CreativeDesigner = () => {
  const backgroundImageStyle = {
    backgroundImage: `url("${backgroundimage}")`,
    backgroundSize: "cover",
    width: "100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  return (
    <>
      <div className="mx-auto container z-10" style={backgroundImageStyle}>
        <div className="text-center sm:text-left w-[90%] sm:flex justify-around sm:w-[73%] pt-[80px] lg:pt-[166px] mx-auto">
          <div className="leftBanner">
            <h3 className="text-[23px] sm:text-[20px] sm:leading-[30px] mb-0.5 sm:mb-1">Hola! I'm</h3>
            <h1 className="text-[24px] leading-[36px] sm:text-[25px] sm:leading-[20px] lg:text-[32px] font-bold lg:leading-[32px] text-[#FD5956] sm:mb-3 lg:mb-5">
              Abrar Ahmed
            </h1>
            <h1 className="  text-[35px] leading-[32px] sm:text-[40px] sm:leading-[50px] lg:text-[100px] font-semibold text-center sm:text-start lg:leading-[100px] ">
              Creative
            </h1>
            <span className=" text-[35px] leading-[52px] sm:text-[40px] sm:leading-[50px] lg:text-[100px] font-semibold text-center sm:text-right lg:leading-[100px] sm:pl-[25px] lg:pl-[50px] mr-1 md:mr-3">
              Designer
            </span>
            <span className="inline-block pl-0 md:pl-1">
              <img src={ellipse} className="w-2 sm:w-[50%] md:w-[70%] lg:w-[100%]" />
            </span>
            <p className=" text-center sm:text-left mx-auto sm:mx-0 w-[80%] sm:w-[63%] md:mt-5 text-[18px] sm:text-[18px] md:text-base sm:leading-[20px] lg:text-xl font-normal lg:leading-[30px] mb-4 md:mb-0">
              Since creative designers often interact with creative teams,
              managers and clients, they need strong communication skills.
            </p>
            <div className="socialBtns space-y-2 w-[50%] mx-auto sm:mx-0 flex flex-wrap justify-between sm:w-[190px] lg:w-[220px] sm:mt-[15px] lg:mt-[35px]">
              <a className="hover:cursor-pointer flex justify-center items-center">
                <img src={facebookimage} />
              </a>
              <a className="hover:cursor-pointer">
                <img src={insta} />
              </a>
              <a className="hover:cursor-pointer">
                <img src={twitter} />
              </a>
              <a className="hover:cursor-pointer">
                <img src={linkedin} />
              </a>
            </div>
            <button className="bg-[#FD5956] text-white w-[90px] h-[35px] xl:w-[188px] xl:h-[52px] mt-9 font-semibold text-base xl:text-lg leading-[15px] xl:leading-[27px] hover:cursor-pointer">
              CV Here
            </button>
          </div>
          <div className="rightBanner mt-10 sm:mt-0 mx-auto lg:max-w-[100%] relative">
            <img src={Design} className="max-w-[70%] sm:max-w-[100%] mx-auto lg:max-w-[120%]" />
            <div className="hidden lg:block lg:w-[520px] lg:h-[500px] xl:w-[680px] xl:h-[450px] absolute lg:top-[420px] lg:left-[-453px] xl:top-[420px] xl:left-[-650px] ">
              <img src={vector} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreativeDesigner;
