import { createContext, useState } from "react";
import "./App.css";
import AddReading from "./Components/AddReading";
import DashBoard from "./Components/DashBoard";
import Home from "./Components/Home";
import SideBar from "./Components/SideBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DataChart from "./Components/Chart";
import DataTable from "./Components/Table";

export const ContextToggle = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const handleToggle = () => {
    setTheme((cur) => (cur === "light" ? "dark" : "light"));
  };
  return (
    <ContextToggle.Provider value={{ theme, handleToggle }}>
      <BrowserRouter>
        <div className="flex main " id={theme}>
          <div>
            <SideBar />
          </div>
          <div className="w-full ">
            {/* routes */}
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/add" element={<AddReading />}></Route>
              <Route path="/dashboard" element={<DashBoard />}>
                <Route path="table" element={<DataChart />}></Route>
                <Route path="chart" element={<DataTable />}></Route>
              </Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </ContextToggle.Provider>
  );
}

export default App;
