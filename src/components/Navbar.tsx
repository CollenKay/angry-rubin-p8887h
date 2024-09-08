import React, { useState } from "react";
import "./Navbar.css"; // Import the Navbar CSS

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar">
      <a className="navbar-brand" href="/">
        My Dashboard
      </a>
      <button className="navbar-toggler" onClick={toggleNav}>
        &#9776; {/* Hamburger icon */}
      </button>
      <div className={`navbar-nav ${isNavOpen ? "show" : ""}`}>
        <a className="nav-link" href="/profile">
          Profile
        </a>
        <a className="nav-link" href="/logout">
          Logout
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
