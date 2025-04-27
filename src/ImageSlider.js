import React, { useState } from "react";

const images = [
  "/assets/images/set_list.jpg",
  "/assets/images/poster_2_24.jpg",
  "/assets/images/poster_3_2.jpg"
];

function ImageSlider() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="image-slider">
      <button onClick={prevSlide} className="slide-button left">
        ←
      </button>
      <img src={images[index]} alt="slide" />
      <button onClick={nextSlide} className="slide-button right">
        →
      </button>
    </div>
  );
}

export default ImageSlider;