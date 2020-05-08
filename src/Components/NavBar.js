import React, { Component } from "react";
import "../Stylings/Navbar.css";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <ul className="nav">
          <li className="nav-item">
            <a href="/" className="nav-link" style={{ color: "white" }}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-link" style={{ color: "white" }}>
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="/contact" className="nav-link" style={{ color: "white" }}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
