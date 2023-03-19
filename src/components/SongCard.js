import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { playPause, setActiveSong } from "../redux/features/playerSlice";

const SongCard = ({ song, isPlaying, activeSong, data, i }) => {
  const dispatch = useDispatch();

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <div className="card">
      <div className="card-img">
        <img alt="song_img" src={song.images?.coverart} />
        <div className="btn">
          <button
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
        </div>
      </div>
      <div className="card-content">
        <p className="title">{song.title}</p>
        <p>
          <Link
            to={
              song.artists
                ? `/artists/${song?.artists[0]?.adamid}`
                : "/top-artists"
            }
          >
            {song.subtitle}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SongCard;
