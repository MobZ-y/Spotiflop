import React from "react";
import { NavLink } from "react-router-dom";

const navbar = () => {
  return (
    <div className="sidebar-content">
      <div className="sidebar-img">
        <h2>Spotiflop</h2>
      </div>
      <div className="sidebar-text">
        <div className="sidebar-text-discovery">
          <div className="sidebar-text-discovery-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M20 20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9z"
                fill="rgba(255,255,255,1)"
              />
            </svg>
          </div>
          <div className="sidebar-text-discovery-title">
            <NavLink to="/">
              <h3>Découverte</h3>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default navbar;
