import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import HeroSection from "../../components/heroSection";
import Highlights from "../../components/highlights";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Header />
      <HeroSection />
      <Highlights />
      <Footer />
    </div>
  );
}

export default App;
