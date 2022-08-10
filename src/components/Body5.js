import React from "react";
import img from "../assets/body5/Group 4.png";
import img2nd from "../assets/body5/Group .png";
import img1 from "../assets/body5/Review_Artboard-1 1.png";
import img2 from "../assets/body5/Review_Artboard-2 1.png";
import img3 from "../assets/body5/Review_Artboard-3 1.png";

function Body5() {
  return (
    <div className="h-[90vh] p-10  ">
      <div className="w-full flex flex-col justify-center items-center">
        <h1 className="font-lora text-[#0A438D] text-6xl ">
          Words from our Clients
        </h1>
        <p>The best of the best is here!</p>
      </div>
      <div className="flex" >
      <div className="w-1/2">
        <img src={img} alt=''></img>
      </div>
      <div className="w-1/2">
        <img src={img2nd} alt=''></img>
      </div>


      </div>
      
      <div className="flex mt-28 mr-10 ml-10 gap-10 ">
        <div>
          <img src={img1} alt=''></img>
        </div>

        <div>
          <img src={img2} alt=''></img>
        </div>

        <div>
          <img src={img3} alt=''></img>
        </div>
      </div>
    </div>
  );
}

export default Body5;
