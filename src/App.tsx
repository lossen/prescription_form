import React from "react";
import "./scss/App.scss";
import { Routes, Route } from "react-router-dom";
import Prescription from "./pages/prescription/Prescription";

function App() {
  return (
    <div className="App container mx-auto">
      <Routes>
        <Route path="/" element={<div>1</div>} />
        <Route path="/prescription" element={<Prescription />} />
        <Route path="*" element={<div>Not found</div>} />
      </Routes>
    </div>
  );
}

export default App;
