import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <nav className=" navbar navbar-expand-md navbar-light p-5">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Band Name
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
        <div
          className="d-md-flex justify-content-end collapse navbar-collapse"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/band">
                Band
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/bio">
                Bio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/tour">
                Tour
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
