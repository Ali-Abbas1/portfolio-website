import React from "react";
import image1 from "../images/left-image.svg";
import image2 from "../images/image2.svg";
import image3 from "../images/image3.svg";
import image4 from "../images/image4.svg";
import image5 from "../images/image5.svg";
import close from "../images/closing.svg";

const RegularPortfolio = () => {
  return (
    <>
      <div className="mx-auto container text-center mt-[225px]">
        <div className="content">
          <h1 className="text-[40px] leading-[50px] xl:text-[55px] xl:leading-[80px] font-normal">
            Our Regular Updated
          </h1>
          <h1 className="text-[46px] leading-[60px] xl:text-[65px] xl:leading-[100px] text-[#FD5956] font-semibold">
            Portfolio.
          </h1>
        </div>
        <div className="images flex xl:flex-nowrap flex-wrap text-center xl:text-left justify-between w-[100%] mt-[100px]">
          <div className="left-image ">
            <img
              src={image1}
              className="max-w-[94%] max-h-[100%] xl:max-h-[830px] xl:max-w-[695px]"
            />
          </div>
          <div className="right-images space-y-7 px-6 flex flex-col">
            <img src={image2} className="w-[450px] " />
            <img src={image3} className="w-[450px]" />
          </div>
          <div className="right-images2 space-y-7 flex flex-col">
            <img src={image4} className="w-[450px]" />
            <img src={image5} className="w-[450px]" />
          </div>
        </div>
        <div className="closing-image flex justify-center items-center text-center mt-[172px]">
          <img src={close} />
        </div>
      </div>
    </>
  );
};

export default RegularPortfolio;
