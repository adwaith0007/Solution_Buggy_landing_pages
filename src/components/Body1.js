import React from "react";
// import Bodybg1 from "../assets/patterN2 1.png";
import Bodybg1 from "../assets/body1/1.jpg";
import Bodybg2 from "../assets/Group 1.png";

function Body1() {
  return (
    <div className=" h-[65%] ">
      <div className="flex relative ">
        <div className="relative ">
          <div className="w-full flex overflow-hidden">
            <img src={Bodybg1} alt="" className="  "></img>
          </div>

          <div className="flex ml-20 flex-col w-[50%] justify-center   ">
            <div className="absolute text-4xl   lg:text-5xl   top-[10%]   font-lora ">
              <div>
                <h1 className="    font-bold text-[#0A438D]  ">
                  India’s Top Food
                </h1>
              </div>
              <div className="mt-2">
                <h1 className="     font-bold text-[#0A438D]  ">
                  Consultants Under
                </h1>
              </div>

              <div className="mt-2">
                <h1 className="      font-bold text-[#0A438D]  ">One Roof</h1>
              </div>

              <div className=" mt-2 text-xl   font-poppins ">
              <p>
                Connect with trusted and verified food consultants in the
                country
              </p>
            </div>
            <div className="mt-2 ">
              <h3 className=" text-2xl font-bold text-[#0A438D]">
                10000+ Expert Consultants • 2000+ Projects
              </h3>
            </div>
            <button className="  text-[20px] md:ml-14 mt-10  border-2 font-lora font-bold border-[#0A438D] rounded-l-2xl rounded-tr-[35px] text-[#0A438D] p-5  ">
              Get Free Consultation
            </button>

            </div>

            
            

            
          </div>

          {/* <div className="absolute ">
          <img className=" object-contain" src={Bodybg2} alt=""></img>
        </div> */}
        </div>
      </div>
    </div>
  );
}

export default Body1;
