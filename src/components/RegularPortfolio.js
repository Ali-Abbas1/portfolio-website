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
      <div className="mx-auto container text-center mt-[120px] md:mt-[225px]">
        <div className="content">
          <h1 className="text-[22px] leading-7 sm:text-[40px] sm:leading-[50px] xl:text-[55px] xl:leading-[80px] font-normal">
            Our Regular Updated
          </h1>
          <h1 className="text-[22px] leading-[35px] sm:text-[46px] sm:leading-[60px] xl:text-[65px] xl:leading-[100px] text-[#FD5956] font-semibold">
            Portfolio.
          </h1>
        </div>
        <div className="images flex justify-center xl:flex-nowrap flex-wrap text-center xl:text-left sm:justify-between w-[100%] mt-[100px]">
          <div className="left-image flex justify-center ">
            <img
              src={image1}
              className="max-w-[72%] sm:max-w-[70%] sm:max-h-[100%] md:max-w-[55%] lg:max-w-[50%] xl:w-[680px] xl:max-h-[830px] xl:max-w-[695px]"
            />
          </div>
          <div className="right-images justify-center xl:w-[747px] sm:w-[450px] max-w-[72%] sm:max-w-[100%] space-y-0 xl:space-y-4 px-0 md:px-6 flex flex-col">
            <img src={image2} className="" />
            
            <img src={image3} className="" />
          </div>
          <div className="right-images2 xl:w-[702px] lg:w-[414px] md:w-[425px] sm:w-[448px] max-w-[72%] sm:max-w-[100%] space-y-0 xl:space-y-4 flex flex-col">
            <img src={image4} className="" />
            <img src={image5} className="" />
          </div>
        </div>
        <div className="closing-image w-[50%] md:[100%] mx-auto flex justify-center items-center text-center mt-[110px] md:mt-[172px]">
          <img src={close} />
        </div>
      </div>
    </>
  );
};

export default RegularPortfolio;
