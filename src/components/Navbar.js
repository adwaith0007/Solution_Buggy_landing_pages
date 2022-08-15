import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/sb_white 1.png";
import vector from "../assets/Vector 1.png";
import login1 from "../assets/login 1.png";
function Navbar() {
  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className=" flex justify-between bg-[#0A438D] items-center  w-full   text-white">
      <div className="w-1/6 mr-4">
        <img className=" h-16 m-auto mx-5 lg:ml-20 mt-2 mb-2 " src={logo} alt="logo"></img>
      </div>

      <div className="">
        <ul className="hidden  md:flex justify-center items-center">
          <li className="p-4 ">Find Expert</li>
          <img className="h-[25px] mt-2 " src={vector} alt=""></img>
          <li className="p-4">View Project </li>
          <img className="h-[25px] mt-2 " src={vector} alt=""></img>
          <li className="p-4">Business Ideas</li>
          <img className="h-[25px] mt-2 " src={vector} alt=""></img>
          <li className="p-4">About Us</li>
          <img className="h-[25px] mt-2 " src={vector} alt=""></img>
          <li className="p-4">Blog</li>
          <img className="h-[25px] mt-2 " src={vector} alt=""></img>
          <li className="p-4">Events</li>
          <img className="h-[25px] mt-2 " src={vector} alt=""></img>
          <li className="p-4">Career</li>
        </ul>
        
      </div>

      <div className=" hidden w-1/6 md:flex flex-col ">
          <div className="hidden md:flex   ">
            <button className="bg-[#FF661B] p-5 h-9 flex justify-center items-center   rounded-l-[14px] ">
              <div className="flex justify-center items-center">
                <img src={login1} alt="" className="mx-1 h-5"></img>
                <p>Register</p>
              </div>
            </button>
            <button
              className="bg-white text-black 
            font-medium
            p-5   h-9 rounded-tr-[17px] flex justify-center items-center "
            >
              Login
            </button>
          </div>
        </div>

      {/* <ul className="hidden  md:flex justify-center items-center">
        <li className="p-4 ">Find Expert</li>
        <img className="h-[25px] mt-2 " src={vector} alt=""></img>
        <li className="p-4">View Project </li>
        <img className="h-[25px] mt-2 " src={vector} alt=""></img>
        <li className="p-4">Business Ideas</li>
        <img className="h-[25px] mt-2 " src={vector} alt=""></img>
        <li className="p-4">About Us</li>
        <img className="h-[25px] mt-2 " src={vector} alt=""></img>
        <li className="p-4">Blog</li>
        <img className="h-[25px] mt-2 " src={vector} alt=""></img>
        <li className="p-4">Events</li>
        <img className="h-[25px] mt-2 " src={vector} alt=""></img>
        <li className="p-4">Career</li>
        <div className="flex mr-7 ml-14">
          <button className="bg-[#FF661B] p-5 h-9 flex justify-center items-center   rounded-l-[14px] ">
            <div className="flex justify-center items-center">
              <img src={login1} alt="" className="mx-1 h-5"></img>
              <p>Register</p>
            </div>
          </button>
          <button
            className="bg-white text-black 
            font-medium
            p-5   h-9 rounded-tr-[17px] flex justify-center items-center "
          >
            Login
          </button>
        </div>
      </ul> */}

      <div onClick={handleNav} className="block md:hidden">
        {!nav ? (
          <AiOutlineClose size={20} className="mr-8 " />
        ) : (
          <AiOutlineMenu size={20} className="mr-8" />
        )}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] z-10 h-full border-r bg-[#000300]  border-r-gray-900 duration-500"
            : "fixed left-[-100%] "
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4 ">
          React.
        </h1>
        <ul className="p-4 uppercase">
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">Company</li>
          <li className="p-4 border-b border-gray-600">Resources</li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
