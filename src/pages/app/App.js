import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <div className="app-container">
        <Header></Header>
        <main>
          <section>Hero section</section>
          <section>Highlights</section>
        </main>
        <Footer>Footer</Footer>
      </div>
    </>
  );
}

export default App;
