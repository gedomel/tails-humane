import React from 'react';
import '../Styles/App.css';
import { Link } from 'react-router-dom';
import tailsLogo from '../images/tailsLogo.png';
/**
 * Renders navigation bar of website.
 * Links are Available Dogs, Available Cats, Staff
 */
function Nav() {
  const navStyle = {
    color: 'white',
  };
  return (
    <nav>
      <Link style={navStyle} to="/">
        <img className="logo" src={tailsLogo} alt="Tails Logo" />
      </Link>
      <div className="nav-links">
        <Link style={navStyle} to="/cats">
          <h2 className="nav-headers">
            <i className="fas fa-cat" />
            Available Cats
          </h2>
        </Link>

        <Link style={navStyle} to="/dogs">
          <h2 className="nav-headers">
            <i className="fas fa-dog" />
            Available Dogs
          </h2>
        </Link>

        <Link style={navStyle} to="/update">
          <h2 className="nav-headers">
            <i className="far fa-clipboard" />
            Staff?
          </h2>
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
