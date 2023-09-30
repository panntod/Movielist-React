import "./App.css";
import { useEffect, useState } from "react";
import { getMovieList, searchMovie } from "./api/api";

const App = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <section className="movie-wrapper" key={i}>
          <img
            className="movie-image"
            src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}
          />
          <div className="movie-title">{movie.title}</div>
          <section className="movie-describe">
            <div className="movie-rate">{movie.vote_average}</div>
            <div className="movie-date">{movie.release_date}</div>
            <div className="category">Movie</div>
          </section>
        </section>
      );
    });
  };

  const search = async (q) => {
    const query = await searchMovie(q);
    setPopularMovies(query.results);
  };

  return (
    <div className="App">
      <navbar className="navbar">
        <h2>
          PandhuMovie<span style={{ color: "blue" }}>.</span>
        </h2>
        <input
          placeholder="Search..."
          className="movie-search"
          onChange={({ target }) => search(target.value)}
        />
      </navbar>
      <div className="movie-container">
        <PopularMovieList />
      </div>
    </div>
  );
};

export default App;
