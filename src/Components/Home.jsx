import React from "react";

export default function Home() {
  return (
    <div className="w-full justify-center items-center h-screen flex  text-black">
      <div className=" h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to Energy Management Dashboard
          </h1>
          <p className="text-lg mb-8">We're grateful to have you on board!</p>
          <p className="text-black">
            Start managing your energy consumption by logging your daily
            readings.
          </p>
        </div>
      </div>
    </div>
  );
}
