import React from "react";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Discover from "./Discover";

const Home = () => {
  return (
    <div className="general">
      <div className="sidebar">
        <Navbar />
      </div>
      <div className="main">
        <Search />
        <Discover />
      </div>
    </div>
  );
};

export default Home;
