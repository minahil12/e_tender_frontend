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
            <NavLink className="nav-link active" to="/aboutus">
              About Us
            </NavLink>
            <NavLink className="nav-link active" to="/contactus">
              Contact Us
            </NavLink>
            <NavLink className="nav-link active" to="#">
              Search
            </NavLink>

            <NavLink className="nav-link active" to="/publish">
              Publish Tender
            </NavLink>

            {!user && (
              <React.Fragment>
                <NavLink className="nav-link active" to="/login">
                  Login
                </NavLink>
                <NavLink className="nav-link active" to="/register">
                  Signup
                </NavLink>
              </React.Fragment>
            )}
            {user && (
              <React.Fragment>
                <NavLink to="/home">{user.name}</NavLink>

                <NavLink className="nav-link active" to="/logout">
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
