import React from "react";
import "./Navbar.css";
import { TfiAlignLeft } from "react-icons/tfi";

function Navbar() {
  return (
    <nav className="navbar">
      
      <div className="nav-wrapper">
        <ul className="ul-list">
          <li>Home</li>
          <li>Events</li>
          <li id="active">Competitions</li>
          <li>Register</li>
          <li>Add an Event</li>
        </ul>
      </div>

      <div className="nav-user-wrapper">
        <button className="login-btn">Login</button>
        <button className="signup-btn">Sign Up</button>
        <div className="user-icon-container">
          <p className="users-icon-wrapper">
            <span className="one-circle"></span>
            <span className="half-circle"></span>
          </p>
        </div>
      </div>

      <div className="nav-toggle">
        <TfiAlignLeft />
      </div>
    </nav>
  );
}

export default Navbar;
