import React from "react";

import Loading from "./Loading";
import { imageUrl } from "../utils/config";

const PopularMovieList = ({ popularMovies, isLoading }) => {
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <h1 className="title">Most Popular Movie</h1>
          <div className="movie-container">
            {popularMovies.map(
              (movie, i) =>
                movie.vote_average !== 0 && (
                  <section className="movie-wrapper" key={i}>
                    <img
                      className="movie-image"
                      src={`${imageUrl}/${movie.poster_path}`}
                      alt={movie.title}
                    />
                    <div className="movie-date">{movie.release_date}</div>
                    <div className="movie-title">{movie.title}</div>
                    <section className="movie-describe">
                      <div className="movie-rate">{movie.vote_average}</div>
                      <div className="category">Movie</div>
                    </section>
                  </section>
                )
            )}
          </div>
        </>
      )}
    </>
  );
};

export default PopularMovieList;
