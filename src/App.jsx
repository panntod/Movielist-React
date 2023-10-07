import "./App.css";
import React, { useState, useEffect } from "react";
import { getMovieList, searchMovie } from "./api/api";
import PopularMovieList from "./component/PopularMovieList"; // Impor PopularMovieList
import Footer from "./component/Footer";

const App = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [searchQuery, setSearchQuery] = useState("");

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
    if (q === "") {
      // Jika input pencarian kosong, ambil daftar film seperti awal
      getMovieList()
        .then((result) => {
          setPopularMovies(result);
        })
        .catch((error) => {
          console.error("Error fetching data: ", error);
        });
    } else {
      const query = await searchMovie(q);
      // setPopularMovies(query.results);
      setPopularMovies(query.results);
    }
  };

  return (
    <div className="App">
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

      <PopularMovieList popularMovies={popularMovies} isLoading={isLoading} />

      <Footer />
    </div>
  );
};

export default App;
