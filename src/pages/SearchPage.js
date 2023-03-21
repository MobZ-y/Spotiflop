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
      .then((res) => setData(res.data.tracks.hits));
  }, [search]);

  console.log(data);
  return (
    <div>
      <div className="discovery">
        <p>dqd</p>
        <div className="discovery-scroll">
          <div className="discovery-scroll-flex">
            {data?.map((song, i) => (
              <SongCard song={song} key={song.key} data={data} i={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
