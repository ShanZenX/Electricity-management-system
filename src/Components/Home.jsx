import React from "react";
import homeimg from "./Light bulb-amico.png"
export default function Home() {
  return (
    <div className="w-full justify-center items-center h-[720px] flex ">
      <div className=" h-screen w-1/2 flex  items-center ">
        <div className="pl-20">
          <h1 className="text-xl font-extralight mb-4">
            Welcome to 
          </h1>
          <span className="text-[#f3df6d] text-8xl font-black">VoltTrack</span>
          <p className="text-lg mt-5 mb-5">We're grateful to have you on board!</p>
          <p className="font-thin">
            Start managing your energy consumption by logging your daily
            readings.
          </p>
        </div>
      </div>
      <div className="w-1/2">
<img src={homeimg} alt="home-img" className=" w-11/12 h-full"/>
      </div>
    </div>
  );
}
