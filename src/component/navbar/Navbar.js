import React from "react";
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-wrapper">
        <div className="outer-nav">
        <div className="left-nav">
            <h1>MeditateMe</h1>
        </div>
        <div className="right-nav">
            <h1>About </h1>
            <h1>Contact</h1>
        </div></div>
      </div>
    </div>
  );
};

export default Navbar;
