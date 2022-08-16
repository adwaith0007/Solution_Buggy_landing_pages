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
    <div className="h-[90%] w-full  ">
      <div className=" flex flex-col justify-center items-center  mb-20 mt-20 md:mt-7 md:mb-7 ">
        {/* <div> */}
        <h1 className="  font-lora mb-6 font-bold text-[#0A438D] text-2xl md:text-5xl ">
          How we can help you?
        </h1>
        {/* </div> */}

        {/* <div className="" > */}
        <p className="text-xl font-semibold">Services we provide</p>
        {/* </div> */}
      </div>

      <div className="h-[60%]  bg-[#E2F1FF] p-2 md:p-10 flex justify-center items-center ">
        <div>
          <div className="w-full   flex flex-col  md:flex md:flex-row  gap-4 mb-3 md:mb-7 md:justify-center items-center ">
            <div className="w-full h-20 flex items-center  ">
              <div className="w-1/2 h-20 flex  items-center justify-start">
                <div className="w-1/2">
                  <img src={img1} alt="" className=" md:h-20   "></img>
                </div>

                <div className=" w-full  ">
                  <p className="m-auto">Market Research</p>
                </div>
              </div>

              <div className="w-1/2 h-20 flex  items-center">
                <div className="w-1/2">
                  <img src={img2} alt="" className=" md:h-20   "></img>
                </div>

                <div className="w-full" >
                  <p className="m-auto">Product Development</p>
                </div>
              </div>
            </div>

            <div className="w-full h-20 flex items-center  ">
              <div className="w-1/2 h-20 flex  items-center">
                <div className="w-1/2" >
                  <img src={img3} alt="" className="md:h-20  "></img>
                </div>

                <div className="w-full" >
                  <p className="m-auto">Plant Setup</p>
                </div>
              </div>
              <div className="w-1/2 h-20 flex  items-center">
                <div className="w-1/2" >
                  <img src={img4} alt="" className=" md:h-20  "></img>
                </div>

                <div className="w-full" >
                  <p className="m-auto">Funding</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full   flex flex-col  md:flex md:flex-row  gap-4 mb-10 md:justify-center items-center ">
            <div className="w-full h-20 flex items-center  ">
              <div className="w-1/2 h-20 flex items-center ">
                <div className="flex w-1/2 ">
                  <img src={img5} alt="" className="md:h-20  "></img>
                </div>

                <div className="w-full">
                  <p className="m-auto items-start ">Machinery Installation</p>
                </div>
              </div>

              <div className="w-1/2 h-20 flex  items-center">
                <div className="w-1/2">
                  <img src={img6} alt="" className=" md:h-20 "></img>
                </div>

                <div className="w-full">
                  <p className="m-auto">Technology Adoptiont</p>
                </div>
              </div>
            </div>

            <div className="w-full h-20 flex items-center  ">
              <div className="w-1/2 h-20 flex  items-center">
                <div className="w-1/2" >
                  <img src={img7} alt="" className="md:h-20  "></img>
                </div>

                <div className="w-full" >
                  <p className="m-auto">License & Certifications</p>
                </div>
              </div>
              <div className="w-1/2 h-20 flex  items-center">
                <div className="w-1/2" >
                  <img src={img8} alt="" className=" md:h-20  "></img>
                </div>

                <div className="w-full" >
                  <p className="m-auto">Packaging & Distribution </p>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="w-full flex gap-4 mb-10 ">
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
            <button className="border-2  px-9 py-3 justify-center text-white items-center rounded-l-[10px] bg-[#0A438D] font-bold rounded-tr-[30px] font-lora   ">
              Many More...{" "}
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Body2;
