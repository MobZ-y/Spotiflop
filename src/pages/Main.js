import React from "react";
import SongCard from "../components/SongCard";
import { useGetSongsByGenreQuery } from "../redux/services/shazamCore";

const Main = () => {
  const { data } = useGetSongsByGenreQuery();
  return (
    <div>
      <div className="flex">
        {data?.map((info) => (
          <SongCard data={info} key={info.key} />
        ))}
      </div>
    </div>
  );
};

export default Main;
