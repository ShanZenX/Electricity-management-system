import React from "react";

export default function EntryCount({ Data, bgcolor, title, number }) {
  return (
    <div
      className=" my-shadow w-full  justify-center items-center flex flex-col m-2 rounded"
      style={{ backgroundColor: bgcolor || "black" }}
    >
      <h1>{title}</h1>
      <h1>{number}</h1>
    </div>
  );
}
