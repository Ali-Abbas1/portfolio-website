import React from "react";
import ellipse from "../images/ellipse.svg";
import card1 from "../images/ui-ux.svg";
import card2 from "../images/webdesign.svg";
import card3 from "../images/WP.svg";
import rectangle from "../images/Rectangle3.svg";

const Services = () => {
  return (
    <>
      <div className="mx-auto container relative text-center flex flex-col justify-center items-center flex-wrap sm:mt-[1160px] md:mt-[1050px] lg:mt-[1120px] xl:mt-[1500px] w-[100%]">
        <div>
          <span className="text-[65px] leading-[100px] font-semibold">
            Services
          </span>
          <span className="inline-block w-2.5 h-2 ml-0.5">
            <img src={ellipse} />
          </span>
        </div>
        <div className=" text-xl leading-[30px] font-normal w-[56%]">
          <p className="text-[24px] leading-9">
            Our team members are experts in all facets of the design industry
            including: print design, illustration, branding, identity and more.
          </p>
        </div>
        <div className="cards flex flex-wrap mx-auto justify-between w-[79%] items-center mt-[184px]">
          <div className="uiCard mx-auto w-[420px] h-[536px] text-left hover:shadow-2xl p-7 hover:scale-110">
            <img src={card1} className="mb-[59px]" />
            <h1 className="text-[32px] font-semibold leading-[48px] mb-3">
              UI/UX Design
            </h1>
            <p className="text-[24px] leading-9">
              Why money's in that office, right If she start giving me some
              bullshit about it ain't there someplace or anywhere.
            </p>
          </div>
          <div className="web-design mx-auto w-[420px] h-[536px] text-left hover:shadow-2xl p-10 hover:scale-110">
            <img src={card2} className="mb-[59px]" />
            <h1 className="text-[32px] font-semibold leading-[48px] mb-3">
              Web Design
            </h1>
            <p className="text-[24px] leading-9">
              Why money's in that office, right If she start giving me some
              bullshit about it ain't there someplace or anywhere.
            </p>
          </div>
          <div className="WP-developing mx-auto w-[420px] h-[536px] text-left hover:shadow-2xl p-10 hover:scale-110">
            <img src={card3} className="mb-[59px]" />
            <h1 className="text-[32px] font-semibold leading-[48px] mb-3">
              WP Developing
            </h1>
            <p className="text-[24px] leading-9">
              Why money's in that office, right If she start giving me some
              bullshit about it ain't there someplace or anywhere.
            </p>
          </div>
        </div>
        <img src={rectangle} className="absolute top-[-320px] right-0 -z-60" />
      </div>
    </>
  );
};

export default Services;
