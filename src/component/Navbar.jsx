import React from "react";

const Navbar = ({ search }) => {
  return (
    <div className="navbar">
      <h2>
        PandhuMovie<span style={{ color: "blue" }}>.</span>
      </h2>
      <div className="search">
        <input
          placeholder="Search..."
          className="movie-search"
          onChange={({ target }) => search(target.value)}
        />
        {/* <button onClick={search}><i className="bi bi-search"></i></button> */}
      </div>
    </div>
  );
};

export default Navbar;
