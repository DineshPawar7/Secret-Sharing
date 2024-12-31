import React from "react";
import "../styles/Header.css";

function Header( {onShare} ) {
  return (
    <header className="header">
      <div className="logo">
        <span className="logo-highlight">Secret</span> Share
      </div>
      <nav className="nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#share">Share Secret</a></li>
          <li><a href="#discover">Discover</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <button className="cta-button" onClick={onShare}>Share a Secret</button>
    </header>
  );
}

export default Header;
