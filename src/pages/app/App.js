import React from "react";
import { Routes, Route, Switch } from "react-router-dom";
import Header from "../../components/header";
import Footer from "../../components/footer";
import HomePage from "../home";
import AboutPage from "../about";
import MenuPage from "../menu";
import ReservePage from "../reservations";
import OrderOnlinePage from "../orderOnline";
import LoginPage from "../login";

import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Routes>
          <Route exec path="/" element={<HomePage />} />
          <Route exec path="/home" element={<HomePage />} />
          <Route exec path="/about" element={<AboutPage />} />
          <Route exec path="/menu" element={<MenuPage />} />
          <Route exec path="/reservations" element={<ReservePage />} />
          <Route exec path="/order-online" element={<OrderOnlinePage />} />
          <Route exec path="/user-login" element={<LoginPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
