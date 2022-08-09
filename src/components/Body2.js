import React from "react";

import img1 from "../assets/body2icons/icon_mr 1.png";
import img2 from "../assets/body2icons/release 2.png";
import img3 from "../assets/body2icons/maintenance 3.png";
import img4 from "../assets/body2icons/investment 4.png";
import img5 from "../assets/body2icons/configuration 5.png";
import img6 from "../assets/body2icons/system 6.png";
import img7 from "../assets/body2icons/licensing 7.png";
import img8 from "../assets/body2icons/licensing 7.png";

function Body2() {
  return (
    <div className="h-[90vh] w-full ">
      <div className=" flex flex-col justify-center items-center  mb-20 mt-20 ">
        {/* <div> */}
        <h1 className="  font-lora mb-6 font-bold text-[#0A438D] text-5xl">
          How we can help you?
        </h1>
        {/* </div> */}

        {/* <div className="" > */}
        <p>Services we provide</p>
        {/* </div> */}
      </div>

      <div className="h-[60vh]  bg-[#E2F1FF] p-10 flex justify-center items-center ">
        <div>
          <div className="w-full flex gap-4 mb-10 justify-center items-center ">
            <div className="w-1/4 h-20 flex items-center ">
              <div className="flex " >
              <img src={img1} alt="" className="h-20  "></img>
              </div>
              
              <div>
              <p className="m-auto items-start ">Market Research</p>
              </div>
              
            </div>
            <div className="w-1/4 h-20 flex  items-center">
              <div>
              <img src={img2} alt="" className=" h-20 "></img>
              </div>
              
              <div>
              <p className="m-auto">Product Development</p>
              </div>
              
            </div>
            <div className="w-1/4 h-20 flex  items-center">

              <div>
              <img src={img3} alt="" className="h-20  "></img>
              </div>

              <div>
              <p className="m-auto">Plant Setup</p>
              </div>
              
              
            </div>
            <div className="w-1/4 h-20 flex  items-center">
              <div>
              <img src={img4} alt="" className=" h-20  "></img>
              </div>

              <div>
              <p className="m-auto">Funding</p>
              </div>
              
              
            </div>
          </div>

          <div className="w-full flex gap-4 mb-10 ">
            <div className="w-1/4 h-20 flex  items-center">
              <div>
              <img src={img5} alt="" className="h-20 "></img>
              </div>

              <div>
              <p className="m-auto">Machinery Installation</p>
              </div>
              
              
            </div>
            <div className="w-1/4  h-20 flex  items-center">

              <div>
              <img src={img6} alt="" className="h-20 "></img>
              </div>

              <div>
              <p className="m-auto">Technology Adoption</p>
              </div>
              
              
            </div>
            <div className="w-1/4 h-20 flex-row flex  items-center">
              <div>
              <img src={img7} alt="" className="h-20  "></img>
              </div>
              
              <div>
              <p className="m">License & Certifications</p>
              </div>
              
            </div>
            <div className="w-1/4 k h-20 flex  items-center  ">
              <div>
              <img src={img8} alt="" className=" h-20 pr- "></img>
              </div>

              <div>
              <p className="">Packaging & Distribution</p>
              </div>
              
             
            </div>
          </div>
          <div className="w-full flex justify-center items-center">
            <button className="border-2 h-14 w-56 justify-center text-white items-center rounded-l-[10px] bg-[#0A438D] font-bold rounded-tr-[30px] font-lora   ">
              Many More...{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body2;
