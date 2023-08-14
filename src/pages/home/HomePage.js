import React from "react";
import HeroSection from "../../components/heroSection";
import Highlights from "../../components/highlights";

const homePageStyle = {
  display: "flex",
  flexDirection: "column",
};

const HomePage = () => {
  return (
    <section style={{ homePageStyle }}>
      <HeroSection />
      <Highlights />
    </section>
  );
};

export default HomePage;
