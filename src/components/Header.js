import React from "react";
import Logo from "../images/logo.svg";
import { useState } from "react";
const Header = () => {
  const [navOpen, setnavOpen] = useState(false);
  return (
    <>
      <div className="flex flex-col space-y-9 lg:hidden">
        <div className="HAMBURGER-ICON relative">
          <button className="absolute top-20 right-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <span className="block h-0.5 w-8 bg-black"></span>
          <span className="block h-0.5 w-8 bg-black"></span>
          <span className="block h-0.5 w-8 bg-black"></span>
          <div className="logo">
            <a>
              <img src={Logo} alt="logo" className="w-[96px] h-[46px]" />
            </a>
          </div>
          <div className="navLinks w-[100%] flex-col justify-center">
            <ul className="flex-col justify-between w-[60%]">
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
            <button className="w-[188px] h-[52px] bg-black text-white text-base font-semibold text-center">
              Portfolio Here
            </button>
          </div>
        </div>
      </div>
      <div className="mx-auto container hidden lg:flex px-[100px] py-4 justify-between items-center ">
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
