import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search/${search}`);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} autoComplete="off" className="">
        <div className="search">
          <input
            name="search-field"
            autoComplete="off"
            placeholder="Search"
            type="search"
            id="search-bar"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default Search;
