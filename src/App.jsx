import "./App.css";
import React, { useState, useEffect } from "react";
import { popularMovie, searchMovie, nowPlaying } from "./api/api";
import PopularMovieList from "./component/PopularMovieList"; // Impor PopularMovieList
import Footer from "./component/Footer";
import NowPlayingMovie from "./component/NowPlayingMovie";
import Navbar from "./component/Navbar";

const App = () => {
  const [nowPlayingMovie, setNowPlayingMovie] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    nowPlaying()
      .then((result) => {
        setNowPlayingMovie(result);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setIsLoading(false);
      });

    popularMovie()
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
    const title = document.querySelector(".title");
    if (q === "") {
      popularMovie()
        .then((result) => {
          setPopularMovies(result);
          setSearchResults([]); // Reset hasil pencarian
        })
        .catch((error) => {
          console.error("Error fetching data: ", error);
        });
    } else {
      const query = await searchMovie(q);
      setPopularMovies([]);
      setSearchResults(query.results);
      title.innerHTML = `Search "${q}"`;
    }
  };

  return (
    <div className="App">
      <Navbar search={search} />
      {searchResults.length > 0 ? (
        <PopularMovieList popularMovies={searchResults} isLoading={isLoading} />
      ) : (
        <>
          <NowPlayingMovie nowPlaying={nowPlayingMovie} isLoading={isLoading} />
          <PopularMovieList
            popularMovies={popularMovies}
            isLoading={isLoading}
          />
        </>
      )}
      <Footer />
    </div>
  );
};

export default App;
