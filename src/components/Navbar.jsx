import React, { useState } from 'react';
import { CaretDownFill } from 'react-bootstrap-icons';
import '../styles/Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <nav className="navbar">
      <div className="left-side">
        <div className="nav-item">About</div>
        <div className="nav-item">Features<CaretDownFill/></div>
        <div className="nav-item">Resources<CaretDownFill/></div>
        <div className="nav-item">Skip Test</div>
        <div className="nav-item">How It Works</div>
        <div className="nav-item">Contact Us</div>
        <div className="nav-item">Quick Quote</div>
      </div>
      <div className="right-side">
       <Link to='/signup'> <button className="signup-button">Sign Up</button></Link>
      </div>
    </nav>
  );
};

export default Navbar;
