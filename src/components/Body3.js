import React from "react";
import img from '../assets/body3/wepik--202256-124419 1.png'

function Body3() {
  return (
    <div className="h-[50vh] w-full flex justify-center md:flex-row sm:flex-col items-center p-10 gap-10">
      <div className="w-1/2 ">
        <h1 className="font-lora font-bold text-5xl text-[#0A438D] ">
          Sub Sectors in The Food Processing Industry
        </h1>
        <p className="mt-9">
          Our sole mission is to transform the ways manufacturers find and hire
          such talents. We have an experienced technical team and advisory
          committee who selects the food industry consultants by thoroughly
          verifying their credentials and studying the previously completed
          projects by the experts and then classifying them under specific
          project expertise. Thereby we ensure your search for food industry
          consultants is taken care of and you get the required quality output
          from the consultants.
        </p>
      </div>
      <div className="w-1/2  justify-center items-center flex-col flex "  > 
      <div>
      <p className="font-poppins " >Go through the sectors</p>
      </div>

      <div>
      <img className=" flex h-[50vh]   w-full  " src={img} alt='' ></img>
      </div>
      
      

      
      </div>
    </div>
  );
}

export default Body3;
