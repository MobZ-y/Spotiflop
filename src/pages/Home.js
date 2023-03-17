import React from "react";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Charts from "../components/charts";

const Home = () => {
  return (
    <div className="general">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Main />
        <Charts />
      </div>
    </div>
  );
};

export default Home;
