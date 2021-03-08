import React from 'react';
import {Link,NavLink} from 'react-router-dom'


const NavBar = () => {
  return (
  <nav className="navbar navbar-expand-lg navbar-dark success-color-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">E-Tender</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
        <NavLink className="nav-link" to="/aboutus">About Us</NavLink>
        <NavLink className="nav-link" to="/contactus">Contact Us</NavLink>
        <NavLink className="nav-link" to="#">Search</NavLink>
        <NavLink className="nav-link" to="/publish">Publish Tender</NavLink>
        <NavLink className="nav-link" to="/login">Login</NavLink>
        <NavLink className="nav-link" to="/register">Sign Up</NavLink>
        <NavLink className="nav-link" to="/profile">Profile</NavLink>

        
      </div>
    </div>
  </div>
</nav>);
}
 
export default NavBar;