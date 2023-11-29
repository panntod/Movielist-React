import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Landingpage = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
      <button className="carousel-slide" onClick={nextSlide}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
      <button className="carousel-slide" onClick={prevSlide}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
    </div>
  );
};

export default Landingpage;
