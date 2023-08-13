import React from "react";
import logo from "../../assets/Logo.svg";

const Header = () => {
  return (
    <header>
      <img className="app-logo" src={logo}></img>
      <nav>
        <a href="/home">Home</a>
        <a href="/home">About</a>
        <a href="/home">Menu</a>
        <a href="/home">Reservations</a>
        <a href="/home">Order Online</a>
        <a href="/home">Login</a>
      </nav>
    </header>
  );
};

export default Header;
