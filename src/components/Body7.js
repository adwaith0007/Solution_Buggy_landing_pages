import React from "react";
import imgbg from "../assets/body7/Rectangle 86.png";
import img from "../assets/body7/Group 3.png";

function Body7() {
  return (
    <div className="h-[90%] w-full">
      <div className="mb-[10%] w-full flex justify-center items-center">
        <h1 className="font-lora mt-14 text-2xl md:text-5xl text-[#0A438D]">
          Completed Projects
        </h1>
      </div>
      <div className="w-full h-[65%] bg-[#E2F1FF]   ">
        <div className="  w-full flex-col items-center md:flex-row mr-10  flex gap-9 md:gap-20 ">
          <div className=" w-full mt-10  md:w-1/3   flex flex-col justify-center items-center relative  ">
            <img className="h-52 " src={img} alt=""></img>
            <p className="mr-14 ml-14">
              Set up OEM unit for AC Duration - 6 Months Budget 100 Crs
            </p>
            <div className=" mt-6 md:mt-10 md:mb-10">
              <button className="border-2 font-lora font-bold  border-[#0A438D] rounded-l-2xl rounded-tr-[35px] text-[#0A438D] p-5 h-12">
                View Complete Project
              </button>
            </div>
          </div>
          <div className=" w-full md:mt-10 md:w-1/3  flex flex-col justify-center items-center relative  ">
            <img className="h-52 " src={img} alt=""></img>
            <p className="mr-14 ml-14">
              Set up OEM unit for AC Duration - 6 Months Budget 100 Crs
            </p>
            <div className="mt-6 md:mt-10 md:mb-10">
              <button className="border-2 font-lora font-bold  border-[#0A438D] rounded-l-2xl rounded-tr-[35px] text-[#0A438D] p-5 h-12">
                View Complete Project
              </button>
            </div>
          </div>
          <div className=" w-full md:mt-10 md:w-1/3  flex flex-col justify-center items-center relative  ">
            <img className="h-52 " src={img} alt=""></img>
            <p className="mr-14 ml-14">
              Set up OEM unit for AC Duration - 6 Months Budget 100 Crs
            </p>
            <div className="mt-6 md:mt-10 mb-10">
              <button className="border-2 font-lora font-bold  border-[#0A438D] rounded-l-2xl rounded-tr-[35px] text-[#0A438D] p-5 h-12">
                View Complete Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body7;
