import React from "react";
import dots from "../images/dots.svg";
import model from "../images/model-view.svg";
import background from "../images/abstract-model.svg";
import vector from "../images/vector1.svg";
import bg from "../images/background.svg";

const Ornament = () => {
  const backgroundStyle = {
    backgroundImage: `url(${background})`,
    width: "1500px",
    backgroundSize: "cover",
    height: "1500px",
  };
  return (
    <>
      <div className="mx-auto container relative">
        <div className="dots absolute left-7 mx-auto">
          <img src={dots} />
        </div>
        <div className="mx-auto flex text-center items-center">
          <img
            src={model}
            className="text-center mx-auto absolute top-40 z-10 left-0 right-0 height h-[1003px] w-[576px]"
          />
          <div>
            <img src={vector} className="absolute top-[400px]" />
          </div>
          <div className="absolute top-[-100px] bottom-0 left-0 right-0 w-full h-full">
            <img src={bg} className="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Ornament;
