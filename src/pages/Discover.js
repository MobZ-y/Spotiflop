import React from "react";
import SongCard from "../components/SongCard";
import { useDispatch, useSelector } from "react-redux";
import { useGetSongsByGenreQuery } from "../redux/services/shazamCore";
import { selectGenreListId } from "../redux/features/playerSlice";
import { genres } from "../assets/constants";

const Discover = () => {
  const dispatch = useDispatch();
  const { genreListId } = useSelector((state) => state.player);
  const { data } = useGetSongsByGenreQuery(genreListId || "POP");
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
          {data?.map((song) => (
            <SongCard song={song} key={song.key} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Discover;
