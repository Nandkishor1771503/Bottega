import React from "react";
import latte from "../images/Latte.png";
import espresso from "../images/Esspreso.png";
function Hero() {
  return (
    <>
      <div className="mobiledesign md:hidden text-[#d68b0c]">
        <div className="flex items-center justify-center">
          <img
          src={latte}
          alt=""
          className=" w-[60%] p-14 rounded-4xl shadow-2xl"
        />
          <h1 className="text-3xl font-bold my-2 mt-20"> latte or espresso </h1>
        
        </div>
          <div className="flex items-center justify-center gap-10">
            <h1 className="text-3xl leading-relaxed font-thin my-2 ml-7 ">
            {" "}
            sip it with a feel{" "}
          </h1>
        
        <img
          src={espresso}
          alt=""
          className=" w-[60%] p-14 rounded-4xl shadow-2xl"
        />
          </div>
      </div>


{/* laptop design */}




      <div className="relative hidden md:flex md:flex-row flex-col mx-8 gap-[35%] p-5 w-full h-[70vh] bg-black text-[#d68b0c]">
        <img
          src={latte}
          alt=""
          className=" w-[30%] p-14 rounded-4xl shadow-2xl"
        />
        <div className="absolute top-44 right-[40%]">
          <h1 className="text-5xl font-bold my-2"> latte or espresso </h1>
          <h1 className="text-5xl font-thin my-2 ml-10">
            {" "}
            sip it with a feel{" "}
          </h1>
        </div>
        <img
          src={espresso}
          alt=""
          className=" w-[30%] p-14 rounded-4xl shadow-2xl"
        />
      </div>
    </>
  );
}

export default Hero;
