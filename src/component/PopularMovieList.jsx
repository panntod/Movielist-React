import React from "react";

const PopularMovieList = ({ popularMovies, isLoading }) => {
  return (
    <>
      {isLoading ? (
        <div className="loader-container">
          <svg
            className="pl"
            viewBox="0 0 200 200"
            width="200"
            height="200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="pl-grad1" x1="1" y1="0.5" x2="0" y2="0.5">
                <stop offset="0%" stopColor="hsl(313,90%,55%)" />
                <stop offset="100%" stopColor="hsl(223,90%,55%)" />
              </linearGradient>
              <linearGradient id="pl-grad2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(313,90%,55%)" />
                <stop offset="100%" stopColor="hsl(223,90%,55%)" />
              </linearGradient>
            </defs>
            <circle
              className="pl__ring"
              cx="100"
              cy="100"
              r="82"
              fill="none"
              stroke="url(#pl-grad1)"
              strokeWidth="36"
              strokeDasharray="0 257 1 257"
              strokeDashoffset="0.01"
              strokeLinecap="round"
              transform="rotate(-90,100,100)"
            />
            <line
              className="pl__ball"
              stroke="url(#pl-grad2)"
              x1="100"
              y1="18"
              x2="100.01"
              y2="182"
              strokeWidth="36"
              strokeDasharray="1 165"
              strokeLinecap="round"
            />
          </svg>
        </div>
      ) : (
        <>
          <h1 className="title">Most Popular Movie</h1>
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
        </>
      )}
    </>
  );
};

export default PopularMovieList;
