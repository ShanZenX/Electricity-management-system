import "./App.css";
import AddReading from "./Components/AddReading";
import DashBoard from "./Components/DashBoard";
import Home from "./Components/Home";
import SideBar from "./Components/SideBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
function App() {
  const [Data, setData] = useState([]);

  const getData = () => {
    fetch("http://localhost:3006/ebData")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => getData(), []);
  return (
    <BrowserRouter>
      <div className="flex  bg-[#435574]">
        <div>
          <SideBar />
        </div>
        <div className="w-full ">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/add" element={<AddReading />}></Route>
            <Route
              path="/dashboard/*"
              element={<DashBoard Data={Data} />}
            ></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
