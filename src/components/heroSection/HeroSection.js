import React from "react";
import HeroImg from "../../assets/hero-img.jpg";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="center-column">
        <div className="hero-layout">
          <aside className="hero-titles">
            <h1 className="hero-title">Little Lemon</h1>
            <h2 className="hero-subtitle">Chicago</h2>
            <div style={{ height: "1rem" }}></div>
            <h4>
              We are family owned mediterranean restaurant, focused on
              traditional recepies severed with a modern twist.
            </h4>
            <div style={{ height: "1rem" }}></div>
            <div className="primary-btn">Reserve a Table</div>
          </aside>
          <aside className="hero-image">
            <div className="img-container">
              <img src={HeroImg} alt="hero" />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
