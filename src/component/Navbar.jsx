import React from "react";

const Navbar = ({ search }) => {
  return (
    <div className="navbar">
      <h2>
        Pandhu <span style={{ color: "blue" }}>Movie</span>
      </h2>
      <div className="search">
        <input
          placeholder="Search..."
          className="movie-search"
          onChange={({ target }) => search(target.value)}
        />
      </div>
    </div>
  );
};

export default Navbar;
