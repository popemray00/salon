import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const NavBar = () => {
    return (
      <div>
        <div className="Navbar">
          <NavLink className="Link" id="Link1" to="/">Home</NavLink>
          <NavLink className="Link" id="Link2" to="/about">About Us</NavLink>
          <NavLink className="Link" id="Link2" to="/stylist">Stylist</NavLink>
          <NavLink className="Link" id="Link3" to="/services">Services</NavLink>
          <NavLink className="Link" id="Link4" to="/contact">Contact Us</NavLink>
        </div>
      </div>
    );
  };
  
  export default NavBar;