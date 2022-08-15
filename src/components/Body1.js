import React, { useEffect ,useState} from "react";
// import Bodybg1 from "../assets/patterN2 1.png";
import Bodybgsm from "../assets/body1/mb.jpg";
import Bodybgdt from "../assets/body1/dt.jpg";
import Bodybg2 from "../assets/Group 1.png";

function Body1() {
  // const [bg,setbg]=useState();
  // useEffect(()=>{

  //   var width = document.documentElement.clientWidth;
    
  //       console.log(width);
  //       if(width >= 768){
  //           setbg(Bodybgsm) ;
  //       }
  //       else{
  //             setbg(Bodybgdt)
  //       }

       
  //     },[]);
  //     console.log(bg)
  return (
    <div className=" h-[65%] ">
      <div className=" ">
        <div className="hidden md:flex lg:flex " >
          <div
            className="w-full   flex bg-no-repeat  "
            style={{ backgroundImage: `url(${Bodybgdt})` }}
          >
            {/* <img src={bg} alt="" className="  "></img> */}

            <div className="flex flex-col m-10 md:ml-20   md:w-[50%] justify-center   ">
              <div className=" text-4xl   lg:text-5xl   top-[10%]   font-lora ">
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
                <button className="   text-[20px] md:ml-14 mt-10  border-2 font-lora font-bold border-[#0A438D] rounded-l-2xl rounded-tr-[35px] text-[#0A438D] md:p-5  ">
                  Get Free Consultation
                </button>
              </div>
            </div>
          </div>
        </div>









        <div className="sm:flex md:hidden lg:hidden " >
          <div
            className="w-full   flex bg-no-repeat bg-cover "
            style={{ backgroundImage: `url(${Bodybgsm})` }}
          >
            {/* <img src={Bodybg1} alt="" className="  "></img> */}

            <div className="flex flex-col m-10 md:ml-20   md:w-[50%] justify-center   ">
              <div className=" text-4xl   lg:text-5xl   top-[10%]   font-lora ">
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
                <button className=" mb-16  text-[20px] md:ml-14 mt-10  border-2 font-lora font-bold border-[#0A438D] rounded-l-2xl rounded-tr-[35px] text-[#0A438D] p-5  ">
                  Get Free Consultation
                </button>
              </div>
            </div>
          </div>
        </div>















      </div>
    </div>
  );
}

export default Body1;
