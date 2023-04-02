import React from "react";

const Track = ({ isPlaying, isActive, activeSong }) => (
  <div className="track">
    <div className="track-img">
      <img
        src={activeSong?.images?.coverart}
        alt="cover art"
        className="rounded-full"
      />
    </div>
    <div className="w-[50%]">
      <p>{activeSong?.title ? activeSong?.title : "No active Song"}</p>
      <p>{activeSong?.subtitle ? activeSong?.subtitle : "No active Song"}</p>
    </div>
  </div>
);

export default Track;
