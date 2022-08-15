import React from "react";
import imgbg from "../assets/body6/Ellipse 5.png";
import img from "../assets/body6/Group 2.png";

function Body6() {
  return (
    <div className="h-[60%]  w-full flex flex-col justify-center items-center">
      <div>
        <h1 className="font-lora font-bold text-[#0A438D] mt-5 md:text-5xl md:mt-16  "> Meet Our Team</h1>
      </div>

      <div className=" md:mt-20 gap-16 p-10 w-full flex flex-col md:flex-row justify-center items-center ">
        <div className=" p-3 relative w-full md:w-1/4  flex justify-center items-center flex-col bg-[#E2F1FF] h-60 ">
          {/* <img className="absolute h-32   " alt="" src={imgbg}></img> */}
          <img className="h-32" src={img} alt=''></img>
          <div className="flex justify-center items-center flex-col">
            <h1 className="font-poppins text-[#4D4D4D] font-bold" >Nithin Gowda</h1>
            <p className="p-3" >
              Lead Project Manager 9+ Years of Experience Field: Food & Chemical
            </p>
          </div>
        </div>
        <div className=" w-full md:w-1/4 bg-[#E2F1FF] h-60"></div>
        <div className=" w-full md:w-1/4 bg-[#E2F1FF] h-60"></div>
        <div className=" w-full md:w-1/4 bg-[#E2F1FF] h-60"></div>
      </div>
    </div>
  );
}

export default Body6;
