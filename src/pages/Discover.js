import React, { useEffect, useState } from "react";
import SongCard from "../components/SongCard";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { selectGenreListId } from "../redux/features/playerSlice";
import { genres } from "../assets/constants";

const Discover = () => {
  const { genreListId } = useSelector((state) => state.player);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  useEffect(() => {
    axios
      .get(
        `https://shazam-core.p.rapidapi.com/v1/charts/genre-world?genre_code=${genreListId}`,
        {
          headers: {
            "x-rapidapi-host": "shazam-core.p.rapidapi.com",
            "x-rapidapi-key":
              "8f1093d68cmsh6769826233f6f74p11d2fajsn99b296e935f2",
          },
        }
      )
      .then((res) => setData(res.data));
  }, [genreListId]);

  console.log(data);

  return (
    <div className="main-first">
      <select
        onChange={(e) => dispatch(selectGenreListId(e.target.value))}
        value={genreListId || "pop"}
        className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
      >
        {genres.map((genre) => (
          <option key={genre.value} value={genre.value}>
            {genre.title}
          </option>
        ))}
      </select>
      <div className="main-scroll">
        <div className="flex">
          {data?.map((song, i) => (
            <SongCard
              song={song}
              key={song.key}
              isPlaying={isPlaying}
              activeSong={activeSong}
              data={data}
              i={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Discover;
