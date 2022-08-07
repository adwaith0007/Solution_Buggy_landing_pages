import React from "react";
import Bodybg1 from "../assets/patterN2 1.png";
import Bodybg2 from "../assets/Group 1.png";

function Body1() {
  return (
    <div className=" h-[90vh] ">
      <div className="flex">
      <div className="relative ">
        <img src={Bodybg1} alt='' ></img>

        <div className="absolute text-5xl top-[20vh]  ml-28 font-lora ">
        <h1 className=" mb-3   font-bold text-[#0A438D]  " >India’s Top Food </h1>
        <h1 className=" mb-3    font-bold text-[#0A438D]  "> Consultants Under </h1>
          <h1 className="      font-bold text-[#0A438D]  "> One Roof</h1>
        </div>
        <div className="absolute top-[40vh] ml-28 font-poppins">
          <p>Connect with trusted and verified food consultants in the country</p>
        </div>
        <div className="absolute top-[45vh] ml-28">
          <h3 className="font-bold text-[#0A438D]" >10000+ Expert Consultants • 2000+ Projects</h3>
        </div>
        <button className=" absolute ml-28 top-[55vh] text-[#0A438D] w-72 h-16 bg-slate-700 ">Get Free Consultation</button>
        
      </div>
      <div className="">
        <img src={Bodybg2} alt='' ></img>
      </div>

      </div>
      
    </div>
  );
}

export default Body1;
