import React from "react";

const Footer = () => {
  return (
    <footer className="app-footer">
      <section className="footer-section">
        <img src="" alt="logo" />
      </section>
      <section className="footer-section">
        <span>Doormat Navigation</span>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Menu</a>
        <a href="">Reservations</a>
        <a href="">Order online</a>
        <a href="">Login</a>
      </section>
      <section className="footer-section">
        <span>Contact</span>
        <a href="">Address</a>
        <a href="">Phone number</a>
        <a href="">Email</a>
      </section>
      <section className="footer-section">
        <span>Social media links</span>
        <a href="">Facebook</a>
        <a href="">Instagram</a>
        <a href="">Rest</a>
        <a href="">Pick me</a>
      </section>
    </footer>
  );
};

export default Footer;
