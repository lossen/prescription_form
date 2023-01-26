import React from "react";
import "./scss/App.scss";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<div>1</div>} />
        <Route path="/test" element={<div>2</div>} />
        <Route path="*" element={<div>Not found</div>} />
      </Routes>
    </div>
  );
}

export default App;
