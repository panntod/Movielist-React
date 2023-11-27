import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NowPlayingMovie = ({ nowPlaying, isLoading }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      {isLoading ? (
        <></>
      ) : (
        <>
          <h1 className="title">Now Showing On Cinema</h1>
          <Slider {...settings}>
            {nowPlaying.map((movie, i) => (
              <div className="playing-wrapper" key={i}>
                <img
                  className="playing-image"
                  src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}
                  alt={movie.title}
                />
                <div className="playing-title">{movie.title}</div>
              </div>
            ))}
          </Slider>
        </>
      )}
    </>
  );
};

export default NowPlayingMovie;
