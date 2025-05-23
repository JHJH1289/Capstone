import React, { useState } from "react";

function Header() {
  const images = [
    "assets/images/set_list.jpg",
    "assets/images/poster_2_24.jpg",
    "assets/images/poster_3_2.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const slide = (direction) => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + direction + images.length) % images.length
    );
  };

  return (
    <section id="home" className="home">
      <div className="overlay">
        <div className="home_skew_border">
          <header className="header-title">
            <h3>Busan Universities Unified Band Performance</h3>
            <h1>2024 Summer Union Concert</h1>
          </header>

          <div className="image-slider">
            <button className="slide-button" onClick={() => slide(-1)}>‹</button>
            <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
            <button className="slide-button" onClick={() => slide(1)}>›</button>
          </div>

          <div className="scroll">
            <a href="#contact" className="btn btn-lg m_t_10">예매하기</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;