import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Landingpage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    {
      image: "cinemas-seat.jpg",
      text: "Nonton Tanpa Tiket?",
      span: "Berangkat...",
    },
    {
      image: "cinemas.jpg",
      text: "Kapan Lagi, Nonton Tanpa Keluarin",
      span: "Duit",
    },
    {
      image: "seat-cinemas.jpg",
      text: "Ajak Keluarga Kamu Nonton Disini!",
    },
  ];

  const nextSlide = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newIndex);
  };

  return (
    <div className="carousel">
      <img
        src={`images/${images[currentImageIndex].image}`}
        alt={`Slide ${currentImageIndex}`}
      />
      <div className="content-container">
        <button className="carousel-slide" onClick={prevSlide}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <p className="carousel-title">
          {images[currentImageIndex].text}{" "}
          <span>{images[currentImageIndex].span}</span>
        </p>
        <button className="carousel-slide" onClick={nextSlide}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

export default Landingpage;
