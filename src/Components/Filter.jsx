import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import ColorSaveBtn from "./ColorSaveBtn";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Filter() {
  const [startDate, setStartDate] = useState([]);
  const [EndDate, setEndDate] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [FilteredData, setFilteredData] = useState([]);

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
      .then((data) => setTableData(data));
  };

  useEffect(() => getData(), []);

  return (
    <div className="flex h-full flex-col w-full justify-center items-center ">
      <form className="flex  flex-col h-2/4 w-3/6 justify-center gap-5 items-center bg-white rounded-xl shadow-lg">
        <h1 className="m-3 font-serif text-2xl">Select the date </h1>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            required
            className="bg-white w-3/6 rounded-md"
            label="Start Date"
            onChange={handelSubmitStart}
          />
          <h1 className="font-thin">|</h1>
          <DatePicker
            required
            className="bg-white w-3/6 rounded-md"
            label="End Date"
            onChange={handelSubmitEnd}
          />
        </LocalizationProvider>
        <Link>
          <ColorSaveBtn />
        </Link>
      </form>
    </div>
  );
}
