import React, { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TextField } from "@mui/material";
import ColorSaveBtn from "./ColorSaveBtn";
import { readingAPI } from "../api/readingAPI";
import eb from "./eb.png";

export default function AddReading() {
  const [date, setDate] = useState(null);
  const [reading, setReading] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const requestBody = {
      id: date?.format("YYYY-MM-DD"),
      date: date?.format("YYYY-MM-DD"),
      number: reading,
    };

    try {
      await readingAPI.addReading(requestBody);
      setDate(null);
      setReading("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full justify-center items-center h-screen flex">
      <form
        className="w-1/2 h-3/6 bg-white m-20 rounded flex flex-col items-center justify-center gap-8 my-shadow"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold text-black">Add Electric Reading</h1>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            required
            className="bg-white w-3/6 rounded-md"
            label="Select Date"
            onChange={(selectedDate) => setDate(selectedDate)}
            value={date}
            sx={{
              "& label": { color: "black" }, // Default label color
              "& .MuiInputLabel-root.Mui-focused": { color: "black" }, // Label turns blue when active
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "black" }, // Default border color
                "&:hover fieldset": { borderColor: "black" },
                "&.Mui-focused fieldset": { borderColor: "black" }, // Border turns blue when focused
              },
              "& input": { color: "black" }, // Input text color
            }}
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
          sx={{
            "& label": { color: "black" }, // Default label color
            "& .MuiInputLabel-root.Mui-focused": { color: "black" }, // Label turns blue when active
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "black" }, // Default border color
              "&:hover fieldset": { borderColor: "black" },
              "&.Mui-focused fieldset": { borderColor: "black" }, // Border turns blue when focused
            },
            "& input": { color: "black" }, // Input text color
          }}
        />
        <ColorSaveBtn name="Save" />
      </form>
      <div className="w-1/2">
        <img src={eb} alt="eb" className="w-5/6" />
      </div>
    </div>
  );
}
