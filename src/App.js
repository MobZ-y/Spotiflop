import "./styles/index.scss";
import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Discover from "./pages/Discover";
import SongPlayer from "./components/SongPlayer";
import Navbar from "./components/Navbar";
import SearchPage from "./pages/SearchPage";

function App() {
  const { activeSong } = useSelector((state) => state.player);

  return (
    <div>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Discovery" element={<Discover />} />
            <Route path="/search/:search" element={<SearchPage />} />
          </Routes>
        </BrowserRouter>

        {activeSong?.title && (
          <div className="song-display">
            <SongPlayer />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

{
  /* <div>
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Discovery" element={<Discover />} />
    <Route path="/search/:search" element={<SearchPage />} />
  </Routes>
</BrowserRouter>

{activeSong?.title && (
  <div className="song-display">
    <SongPlayer />
  </div>
)}
</div> */
}
