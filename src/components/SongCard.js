import React from "react";

const SongCard = ({ data }) => {
  return (
    <div>
      <div className="card">
        <div className="card-img">
          <img alt="song_img" src={data.images?.coverart} className="" />
        </div>
        <div className="card-content">
          <p className="title">{data.title}</p>
        </div>
      </div>
    </div>
  );
};

export default SongCard;
