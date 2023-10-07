import "./App.css";
import React, { useState, useEffect } from "react";
import { getMovieList, searchMovie } from "./api/api";
import PopularMovieList from "./component/PopularMovieList"; // Impor PopularMovieList

const App = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getMovieList()
      .then((result) => {
        setPopularMovies(result);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setIsLoading(false);
      });
  }, []);

  const search = async (q) => {
    const query = await searchMovie(q);
    setPopularMovies(query.results);
  };

  return (
    <div className="App">
      <div className="navbar">
        <h2>
          PandhuMovie<span style={{ color: "blue" }}>.</span>
        </h2>
        <input
          placeholder="Search..."
          className="movie-search"
          onChange={({ target }) => search(target.value)}
        />
      </div>
      <div className="movie-container">
        <PopularMovieList popularMovies={popularMovies} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default App;
