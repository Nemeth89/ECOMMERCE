import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaShoppingCart,
  FaUser,
  FaBars,
  FaTimes,
  FaBox,
  FaInfoCircle,
  FaEnvelope,
  FaSignOutAlt,
} from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    // Clear any authentication tokens or user session data
    localStorage.removeItem("authToken");
    alert("You have been logged out!");
    // Redirect to the home page or login page
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Home Button with Logo and Name */}
        <div className="navbar-logo">
          
          <Link to="/" onClick={() => setIsOpen(false)} className="logo-container">
            <img
              src="/logo.jpg" // Replace with your logo's actual path
              alt="Logo"
              className="logo"
            />
            <span className="logo-text">SHOP247</span>
          </Link>
        </div>
        <div className={`navbar-links ${isOpen ? "active" : ""}`}>
          <ul>
            <li>
              <Link to="/product" onClick={() => setIsOpen(false)}>
                <FaBox /> Product
              </Link>
            </li>
            <li>
              <Link to="/cart" onClick={() => setIsOpen(false)}>
                <FaShoppingCart /> Cart
              </Link>
            </li>
            <li>
              <Link to="/login" onClick={() => setIsOpen(false)}>
                <FaUser /> Login/Sign up
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setIsOpen(false)}>
                <FaInfoCircle /> About
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <FaEnvelope /> Contact
              </Link>
            </li>
            <li>
              <button
                onClick={() => {
                  handleLogout();
                  setIsOpen(false);
                }}
                className="logout-button"
              >
                <FaSignOutAlt /> Logout
              </button>
            </li>
          </ul>
        </div>
        <div className="navbar-toggle" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
