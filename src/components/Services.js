import React from "react";
import ellipse from "../images/ellipse.svg";

const Services = () => {
  return (
    <>
      <div className="mx-auto container text-center flex flex-col justify-center items-center flex-wrap mt-[1500px] w-[50%]">
        <div>
          <span className="text-[65px] leading-[100px] font-semibold">
            Services
          </span>
          <span className="inline-block w-2.5 h-2 ml-0.5">
            <img src={ellipse} />
          </span>
        </div>
        <div className=" text-xl leading-[30px] font-normal">
          <p>
            Our team members are experts in all facets of the design industry
            including: print design, illustration, branding, identity and more.
          </p>
        </div>
      </div>
    </>
  );
};

export default Services;
