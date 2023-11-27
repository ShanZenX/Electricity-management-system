import React, { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TextField } from "@mui/material";
import ColorSaveBtn from "./ColorSaveBtn";

export default function AddReading() {
  const [date, setDate] = useState("");
  const [reading, setReading] = useState("");

  const postApi = "http://localhost:3006/ebData";

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = {
      id: date?.format("YYYY-MM-DD"),
      date: date?.format("YYYY-MM-DD"),
      number: reading,
    };

    fetch(postApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then(console.log("send", requestBody), setDate(null), setReading(null))
      .catch((err) => console.log(err));

    setReading("");
  };

  return (
    <div className="w-full justify-center items-center h-screen flex flex-col">
      <form
        className="w-2/4 h-3/6 bg-white rounded flex flex-col items-center justify-center gap-8 my-shadow"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold">Add Electric Reading</h1>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            required
            className="bg-white w-3/6 rounded-md"
            label="Select Date"
            onChange={(selectedDate) => setDate(selectedDate)}
            value={date}
          />
        </LocalizationProvider>
        <TextField
          name="reading"
          label="Reading"
          className="w-3/6 bg-white rounded-md"
          type="number"
          required
          onChange={(e) => setReading(e.target.value)}
          value={reading}
        />
        <ColorSaveBtn name="Save" />
      </form>
    </div>
  );
}
