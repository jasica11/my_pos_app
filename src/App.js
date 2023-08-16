import "./index.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/SideBar";
import RawMaterial from "./components/RawMaterial";
import PurchaseManagement from "./components/PurchaseManagement";
import Reports from "./components/Reports";

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<RawMaterial />} />
          <Route exact path="/purchase" element={<PurchaseManagement />} />
          <Route exact path="/reports" element={<Reports />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
