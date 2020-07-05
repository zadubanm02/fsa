import React from "react";
import { Link } from "react-router-dom";
import "./navigation.css";
import { UserContext } from "../UserContext";

export const Navigation = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        FSA MZ
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <Link to="/">
              <a class="nav-link" href="#">
                Home
              </a>
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/posts">
              <a class="nav-link" href="#">
                Posts
              </a>
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/contact">
              <a class="nav-link" href="#">
                Contact
              </a>
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/login">
              <a class="nav-link" href="#">
                Login
              </a>
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/register">
              <a class="nav-link" href="#">
                Register
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
