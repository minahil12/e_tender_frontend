import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = ({ user }) => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark "
      style={{ backgroundColor: "#16c79a" }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          E-Tender
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-link active" aria-current="page" to="/home">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/aboutus">
              About Us
            </NavLink>
            <NavLink className="nav-link" to="/contactus">
              Contact Us
            </NavLink>
            <NavLink className="nav-link" to="#">
              Search
            </NavLink>

            {!user && (
              <React.Fragment>
                <NavLink className="nav-link" to="/login">
                  LOGIN
                </NavLink>
                <NavLink className="nav-link" to="/register">
                  SIGNUP
                </NavLink>
              </React.Fragment>
            )}
            {user && (
              <React.Fragment>
                <NavLink to="/home">{user.name}</NavLink>
                <NavLink className="nav-link" to="/publish">
                  Publish Tender
                </NavLink>

                <NavLink className="nav-link" to="/logout">
                  LOGOUT
                </NavLink>
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
