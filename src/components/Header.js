import React from "react";
import Logo from "../images/logo.svg";
import { useState } from "react";
const Header = () => {
  const [Open, setOpen] = useState(false);
  return (
    <>
       {!Open ? 
       (
        <button className="lg:hidden block absolute top-4 right-5 z-50 hover:cursor-pointer" onClick={() => setOpen(!Open)}>
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
       ) : (
        <button className="text-4xl text-white z-50 fixed top-2 right-5" onClick={() => setOpen(!Open)}>&times;</button>
        
        )
      }
      <div className={`pt-[50px] block lg:hidden text-left z-30 opacity-0.6 navLinks justify-center bg-gray-500 text-white space-y-14 text-lg  ${Open? 'translate-x-10':'translate-x-full'} fixed top-0 right-0 w-[63vw] h-full ease-in-out duration-300 `}>
       <ul className="flex flex-col justify-between items-center mx-auto">
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
       <button className="w-[188px] h-[52px] flex items-center justify-center bg-black text-white mx-auto text-base font-semibold text-center">
         Portfolio Here
       </button>
     </div>
      <div className="pl-4 pt-4 space-y-14 lg:hidden ">
          <div className="logo">
            <a>
              <img src={Logo} alt="logo" className="w-[96px] h-[46px]" />
            </a>
        </div>
      </div>
      <div className="mx-auto container hidden lg:flex px-[100px] py-4 justify-between items-center ">
        <div className="logo">
          <a>
            <img src={Logo} alt="logo" className="w-[96px] h-[46px]" />
          </a>
        </div>
        <div className="navLinks w-[100%] flex justify-center">
          <ul className="flex justify-between lg:w-[80%] md:w-[60%]">
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
