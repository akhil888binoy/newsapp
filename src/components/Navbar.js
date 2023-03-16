import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            News App
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/"
                  onClick={() => navigate("/")}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/Business"
                  onClick={() => navigate("/Business")}
                >
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/Entertainment"
                  onClick={() => navigate("/Entertainment")}
                >
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/General"
                  onClick={() => navigate("/General")}
                >
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/Health"
                  onClick={() => navigate("/Health")}
                >
                  Health
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
