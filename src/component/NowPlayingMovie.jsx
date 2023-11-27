import React from "react";

const NowPlayingMovie = ({ nowPlaying, isLoading }) => {
  return (
    <>
    {isLoading ? (
        <></>
      ) : (
        <>
      <h1 className="title">Now Showing On Cinema</h1>
      <div className="movie-container">
        {nowPlaying.map((movie, i) => (
          <section className="movie-wrapper" key={i}>
            <img
              className="movie-image"
              src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}
              alt={movie.title}
            />
            <div className="movie-title">{movie.title}</div>
          </section>
        ))}
      </div>
      </>
      )}
    </>
  );
};

export default NowPlayingMovie;
