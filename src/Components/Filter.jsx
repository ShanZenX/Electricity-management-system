import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import ColorSaveBtn from "./ColorSaveBtn";
import { useEffect } from "react";
import "../index.css";

export default function Filter() {
  const [startDate, setStartDate] = useState("");
  const [EndDate, setEndDate] = useState("");
  const [tableData, setTableData] = useState([]);
  const [FilteredData, setFilteredData] = useState([]);

  const handleForm = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    setStartDate("");
    setEndDate("");
  };

  const handelSubmitStart = (selectedDate) => {
    const format = selectedDate.format("YYYY-MM-DD");
    setStartDate(format);
  };

  const handelSubmitEnd = (selectedDate) => {
    const format = selectedDate.format("YYYY-MM-DD");
    setEndDate(format);
  };

  const getData = () => {
    fetch("http://localhost:3006/ebData")
      .then((res) => res.json())
      .then((data) => setTableData(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => getData(), []);

  return (
    <div className="flex flex-col  justify-center items-center  rounded shadow  m-2 p-2 w-full ">
      <form
        className="flex  h-3/4 w-3/4 pl-24  gap-5 items-center"
        onSubmit={handleForm}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            required
            className="bg-white rounded-md "
            label="Start Date"
            value={startDate}
            onChange={handelSubmitStart}
          />
          <h1 className="font-thin">-</h1>
          <DatePicker
            required
            className="bg-white rounded-md "
            label="End Date"
            value={EndDate}
            onChange={handelSubmitEnd}
          />
        </LocalizationProvider>
        <button type="submit" className=" ml-60">
          <ColorSaveBtn name="Search" />
        </button>
      </form>
    </div>
  );
}
