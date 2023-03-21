import "./styles/index.scss";
import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SongPlayer from "./components/SongPlayer";
import SearchPage from "./pages/SearchPage";
import { Discover, Search, Navbar } from "./pages/Home";

function App() {
  const { activeSong } = useSelector((state) => state.player);

  return (
    <BrowserRouter>
      <div className="general">
        <div className="sidebar">
          <Navbar />
          <Search />
        </div>
        <div className="main">
          <Routes>
            <Route path="/" element={<Discover />} />
            <Route path="/search/:search" element={<SearchPage />} />
          </Routes>

          {activeSong?.title && (
            <div className="song-display">
              <SongPlayer />
            </div>
          )}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
