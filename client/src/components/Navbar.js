import React from 'react';
import "./Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
    return (
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" id="link" href="/">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="link" href="stylist">~  Stylist</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="link" href="services">~  Services</a>
                </li>
              </ul>
            </div>

            <div className="icons">
                <a href="https://www.facebook.com/salonambiancegresham/" target="blank"><FontAwesomeIcon icon={['fab', 'facebook']} size="3x" className="social" /></a>
                <a href="https://www.instagram.com/salonambiancegresham/?hl=en" target="blank"><FontAwesomeIcon icon={['fab', 'instagram']} size="3x" className="social" /></a>
            </div>
          </nav>
        </div>
    )
}

export default Navbar;