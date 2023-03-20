import React from "react";
import Navbar from "../components/Navbar";

import Discover from "./Discover";

const Home = () => {
  return (
    <div className="general">
      <div className="sidebar">
        <Navbar />
      </div>
      <div className="main">
        <Discover />
      </div>
    </div>
  );
};

export default Home;
