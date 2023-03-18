import "./styles/index.scss";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Discover from "./pages/Discover";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Discovery" element={<Discover />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
