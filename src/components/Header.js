import React from "react";
import Logo from "../images/logo.svg";
const Header = () => {
  return (
    <>
      <div className="mx-auto container flex px-[100px] py-4 justify-between items-center ">
        <div className="logo">
          <a>
            <img src={Logo} alt="logo" className="w-[96px] h-[46px]" />
          </a>
        </div>
        <div className="navLinks w-[100%] flex justify-center">
          <ul className="flex justify-between w-[60%]">
            <li>
              <a href="#" className=" hover:text-[#FD5956]">
                Home
              </a>
            </li>
            <li>
              <a href="#" className=" hover:text-[#FD5956]">
                Contributers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#FD5956]">
                About Me
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#FD5956]">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#FD5956]">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#FD5956]">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="portfolioBtn">
          <button className="w-[188px] h-[52px] bg-black text-white text-lg font-semibold text-center">
            Portfolio Here
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
