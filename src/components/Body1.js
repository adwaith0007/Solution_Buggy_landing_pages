import React from "react";
import Bodybg1 from "../assets/patterN2 1.png";
import Bodybg2 from "../assets/Group 1.png";

function Body1() {
  return (
    <div className=" h-[65vh] ">
      <div className="flex">
      <div className="relative ">
        <img src={Bodybg1} alt='' ></img>
        <div className="flex flex-col w-full justify-center ml-28  " >

        <div className="absolute text-5xl   top-[10vh]   font-lora ">
          <div>
          <h1 className="    font-bold text-[#0A438D]  " >India’s Top Food </h1>
          </div>
          <div>
          <h1 className="     font-bold text-[#0A438D]  "> Consultants Under </h1>
          </div>

          <div>
          <h1 className="      font-bold text-[#0A438D]  "> One Roof</h1>
          </div>
        
        
          
        </div>


        <div className="flex justify-center  flex-col">

        <div className="absolute  top-[35vh]  font-poppins">
          <p>Connect with trusted and verified food consultants in the country</p>
        </div>
        <div className="absolute top-[40vh] ">
          <h3 className="font-bold text-[#0A438D]" >10000+ Expert Consultants • 2000+ Projects</h3>
        </div>

        </div>
        

        </div>

        
        <button className=" absolute ml-28 top-[50vh] border-2 font-lora font-bold border-[#0A438D] rounded-l-2xl rounded-tr-[35px] text-[#0A438D] w-72 h-16 ">Get Free Consultation</button>
        
      </div>
      <div className="">
        <img className=" object-contain" src={Bodybg2} alt='' ></img>
      </div>

      </div>
      
    </div>
  );
}

export default Body1;
