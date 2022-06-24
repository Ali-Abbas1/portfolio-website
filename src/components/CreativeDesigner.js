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
      <div className="mx-auto container" style={backgroundImageStyle}>
        <div className="flex justify-around w-[73%] pt-[166px] mx-auto">
          <div className="leftBanner">
            <h3 className="text-[20px] leading-[30px] mb-4">Hola! I'm</h3>
            <h1 className="sm:text-[25px] sm:leading-[20px] lg:text-[32px] font-bold lg:leading-[32px] text-[#FD5956] sm:mb-3 lg:mb-5">
              Abrar Ahmed
            </h1>
            <h1 className="sm:text-[40px] sm:leading-[50px] lg:text-[100px] font-semibold text-start lg:leading-[100px] ">
              Creative
            </h1>
            <span className="sm:text-[40px] sm:leading-[50px] lg:text-[100px] font-semibold text-right lg:leading-[100px] sm:pl-[25px] lg:pl-[50px] mr-3">
              Designer
            </span>
            <span className="inline-block pl-0.5">
              <img src={ellipse} />
            </span>
            <p className="w-[63%] mt-5 sm:text-base sm:leading-[20px] lg:text-xl font-normal lg:leading-[30px]">
              Since creative designers often interact with creative teams,
              managers and clients, they need strong communication skills.
            </p>
            <div className="socialBtns flex flex-wrap justify-between sm:w-[150px] lg:w-[220px] sm:mt-[15px] lg:mt-[35px]">
              <a className="hover:cursor-pointer">
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
          <div className="rightBanner lg:max-w-[100%] relative">
            <img src={Design} className="lg:max-w-[120%]" />
            <div className="sm:hidden lg:block lg:w-[520px] lg:h-[500px] xl:w-[680px] xl:h-[450px] mx-auto absolute lg:top-[420px] lg:left-[-453px] xl:top-[420px] xl:left-[-650px] ">
              <img src={vector} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreativeDesigner;
