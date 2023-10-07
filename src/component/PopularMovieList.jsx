import React from "react";

const PopularMovieList = ({ popularMovies, isLoading }) => {
  console.log(popularMovies);
  return (
    <>
      {isLoading ? (
        <div className="loading-animation">Loading...</div>
      ) : (
        <div className="movie-container">
          {popularMovies.map(
            (movie, i) =>
              // Periksa apakah vote_average tidak sama dengan 0
              movie.vote_average !== 0 && (
                <section className="movie-wrapper" key={i}>
                  <img
                    className="movie-image"
                    src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}
                    alt={movie.title}
                  />
                  <div className="movie-title">{movie.title}</div>
                  <section className="movie-describe">
                    <div className="movie-rate">{movie.vote_average}</div>
                    <div className="movie-date">{movie.release_date}</div>
                    <div className="category">Movie</div>
                  </section>
                </section>
              )
          )}
        </div>
      )}
    </>
  );
};

export default PopularMovieList;
