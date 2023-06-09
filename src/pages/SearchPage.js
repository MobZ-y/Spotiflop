import React, { useEffect, useState } from "react";
import SongCard from "../components/SongCard";
import axios from "axios";
import { useParams } from "react-router-dom";

const SearchPage = () => {
  const { search } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://shazam-core.p.rapidapi.com/v1/search/multi?search_type=SONGS_ARTISTS&query=${search}`,
        {
          headers: {
            "x-rapidapi-host": "shazam-core.p.rapidapi.com",
            "x-rapidapi-key":
              "8f1093d68cmsh6769826233f6f74p11d2fajsn99b296e935f2",
          },
        }
      )
      .then((res) => setData(res.data));
  }, [search]);

  const songs = data?.tracks?.hits.map((song) => song.track);

  return (
    <div>
      <div className="discovery">
        <div className="discovery-flex">
          {songs?.map((song, i) => (
            <SongCard song={song} key={song.key} data={data} i={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
