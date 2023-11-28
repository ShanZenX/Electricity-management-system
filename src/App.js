import "./App.css";
import AddReading from "./Components/AddReading";
import DashBoard from "./Components/DashBoard";
import Home from "./Components/Home";
import SideBar from "./Components/SideBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="flex  bg-gray-100 text-black">
        <div>
          <SideBar />
        </div>
        <div className="w-full ">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/add" element={<AddReading />}></Route>
            <Route path="/dashboard/*" element={<DashBoard />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
