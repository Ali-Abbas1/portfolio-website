import React from "react";
import ellipse from "../images/ellipse.svg";
import card1 from "../images/ui-ux.svg";
import card2 from "../images/webdesign.svg";
import card3 from "../images/WP.svg";
import rectangle from "../images/Rectangle3.svg";

const Services = () => {
  return (
    <>
      <div className="mx-auto container relative text-center flex flex-col justify-center items-center flex-wrap mt-[590px] sm:mt-[790px] md:mt-[1050px] lg:mt-[1120px] xl:mt-[1500px] w-[100%]">
        <div>
          <span className="text-[28px] leading-[48px] md:text-[65px] md:leading-[100px] font-semibold">
            Services
          </span>
          <span className="inline-block w-1.5 h-1 sm:w-2.5 sm:h-2 ml-0.5">
            <img src={ellipse} />
          </span>
        </div>
        <div className=" text-xl leading-[20px] font-normal w-[90%] sm:w-[56%]">
          <p className="text-[17px] leading-6 md:text-[24px] md:leading-9">
            Our team members are experts in all facets of the design industry
            including: print design, illustration, branding, identity and more.
          </p>
        </div>
        <div className="cards flex flex-wrap md:flex-row mx-auto justify-between w-[79%] lg:w-[96%] items-center mt-[140px] md:mt-[184px]">
          <div className="uiCard mx-auto w-[420px] h:[420px] md:h-[536px] text-left hover:shadow-2xl mb-5 p-3 md:p-10 hover:scale-110">
            <img src={card1} className="mb-[40px] md:mb-[59px] mx-auto sm:mx-0" />
            <h1 className="text-[22px] leading-[30px] sm:text-[32px] text-center sm:text-left font-semibold sm:leading-[48px] mb-3">
              UI/UX Design
            </h1>
            <p className="text-[18px] sm:w-[80%] md:w-[100%] leading-[28px] text-center sm:text-left sm:text-[24px] sm:leading-9">
              Why money's in that office, right If she start giving me some
              bullshit about it ain't there someplace or anywhere.
            </p>
          </div>
          <div className="web-design z-10 mx-auto w-[420px] h:[420px] md:h-[536px] text-left hover:shadow-2xl p-3 sm:p-10 hover:scale-110">
            <img src={card2} className="mb-[30px] sm:mb-[59px] mx-auto sm:mx-0"  />
            <h1 className="text-[22px] leading-[30px] sm:text-[32px] text-center sm:text-left font-semibold sm:leading-[48px] mb-5">
              Web Design
            </h1>
            <p className="text-[18px] text-center sm:text-left sm:w-[80%] md:w-[100%] leading-[28px] sm:text-[24px] sm:leading-9">
              Why money's in that office, right If she start giving me some
              bullshit about it ain't there someplace or anywhere.
            </p>
          </div>
          <div className="WP-developing mt-[40px] sm:mt-0 z-10 mx-auto w-[420px] h:[420px] md:h-[536px] text-left hover:shadow-2xl p-3 md:p-10 hover:scale-110">
            <img src={card3} className="mb-[35px] sm:mb-[59px] mx-auto sm:mx-0" />
            <h1 className="text-[22px] leading-[30px] text-center sm:text-left sm:text-[32px] font-semibold sm:leading-[48px] mb-3">
              WP Developing
            </h1>
            <p className="text-[18px] text-center sm:text-left sm:w-[80%] md:w-[100%]  leading-[28px] sm:text-[24px] sm:leading-9">
              Why money's in that office, right If she start giving me some
              bullshit about it ain't there someplace or anywhere.
            </p>
          </div>
        </div>
        <img src={rectangle} className=" block absolute top-[524px] md:top-[-320px] right-0 -z-60" />
      </div>
    </>
  );
};

export default Services;
