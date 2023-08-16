import React from "react";
import logo from "../../assets/Logo.svg";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const currentPath = useLocation().pathname;

  return (
    <header className="app-header">
      <div className="center-column">
        <div className="base-layout">
          <img className="app-logo" src={logo} alt="app logo"></img>
          <nav>
            <Link
              to="/home"
              className={currentPath === "/home" ? "selected" : ""}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={currentPath === "/about" ? "selected" : ""}
            >
              About
            </Link>
            <Link
              to="/menu"
              className={currentPath === "/menu" ? "selected" : ""}
            >
              Menu
            </Link>
            <Link
              to="/reservations/reserve"
              className={
                currentPath === "/reservations/reserve" ? "selected" : ""
              }
            >
              Reservations
            </Link>
            <Link
              to="/order-online"
              className={currentPath === "/order-online" ? "selected" : ""}
            >
              Order Online
            </Link>
            <Link
              to="/user-login"
              className={currentPath === "/user-login" ? "selected" : ""}
            >
              Login
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
