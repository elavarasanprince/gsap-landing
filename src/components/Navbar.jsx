import React from "react";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navbar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow-sm sticky-top">
    <div className="container">
      <Link className="navbar-brand fw-bold fs-3" to="/">
        R|ethoric.
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/how-it-works">
              How it works
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/examples">
              Examples
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/benefits">
              Benefits
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/faq">
              FAQ
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/tools">
              Free tools
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/blog">
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  );
}