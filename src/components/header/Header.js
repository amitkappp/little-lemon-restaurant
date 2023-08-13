import React from "react";
import logo from "../../assets/Logo.svg";

const Header = () => {
  return (
    <header className="app-header">
      <div className="center-column">
        <div className="base-layout">
          <img className="app-logo" src={logo}></img>
          <nav>
            <a href="/home" className="selected">
              Home
            </a>
            <a href="/home">About</a>
            <a href="/home">Menu</a>
            <a href="/home">Reservations</a>
            <a href="/home">Order Online</a>
            <a href="/home">Login</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
