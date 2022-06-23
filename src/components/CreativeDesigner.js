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
  };
  return (
    <>
      <div className="mx-auto container" style={backgroundImageStyle}>
        <div className="flex justify-around w-[73%] pt-[166px] mx-auto">
          <div className="leftBanner">
            <h3 className="text-[20px] leading-[30px] mb-4">Hola! I'm</h3>
            <h1 className="text-[32px] font-bold leading-[32px] text-[#FD5956] mb-5">
              Abrar Ahmed
            </h1>
            <h1 className="text-[100px] font-semibold text-start leading-[100px]">
              Creative
            </h1>
            <span className="text-[100px] font-semibold text-right leading-[100px] pl-[50px] mr-3">
              Designer
            </span>
            <span className="inline-block pl-2">
              <img src={ellipse} />
            </span>
            <p className="w-[63%] mt-5 text-xl font-normal leading-[30px]">
              Since creative designers often interact with creative teams,
              managers and clients, they need strong communication skills.
            </p>
            <div className="socialBtns flex justify-between w-[33%] mt-[35px]">
              <a>
                <img src={facebookimage} />
              </a>
              <a>
                <img src={insta} />
              </a>
              <a>
                <img src={twitter} />
              </a>
              <a>
                <img src={linkedin} />
              </a>
            </div>
            <button className="bg-[#FD5956] text-white w-[188px] h-[52px] mt-9">
              CV Here
            </button>
          </div>
          <div className="rightBanner relative">
            <img src={Design}></img>
            <div className="w-[700px] h-[410px] mx-auto absolute top-[380px] left-[-660px] ">
              <img src={vector} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreativeDesigner;
