import React, { useState, useEffect } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import ColorSaveBtn from "./ColorSaveBtn";

export default function Filter({ filteredData }) {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [data, setData] = useState([]);

  const getData = () => {
    fetch("http://localhost:3006/ebData")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => getData(), []);

  const handleForm = (e) => {
    e.preventDefault();
    const filterData = data.filter(
      (item) => item.id >= startDate && item.id <= endDate
    );

    console.log(filterData);
    filteredData(filterData);
  };

  const handleSubmitStart = (selectedDate) => {
    const format = selectedDate.format("YYYY-MM-DD");
    setStartDate(format);
  };

  const handleSubmitEnd = (selectedDate) => {
    const format = selectedDate.format("YYYY-MM-DD");
    setEndDate(format);
  };

  return (
    <div className="flex flex-col justify-center items-center m-2 w-full">
      <form
        className="flex gap-5 items-center h-12 justify-center"
        onSubmit={handleForm}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            required
            className="bg-white rounded-md"
            label="Start Date"
            value={startDate}
            onChange={handleSubmitStart}
            slotProps={{ textField: { size: "small" } }}
          />
          <h1 className="font-thin">-</h1>
          <DatePicker
            required
            className="bg-white rounded-md"
            label="End Date"
            value={endDate}
            onChange={handleSubmitEnd}
            slotProps={{ textField: { size: "small" } }}
          />
        </LocalizationProvider>
        <ColorSaveBtn name="Search" />
      </form>
    </div>
  );
}
