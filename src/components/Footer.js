import React from 'react';
import './Footer'; // Ensure you create the CSS file to style the footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left section: Copyright info */}
        <div className="footer-left">
          <p>&copy; {new Date().getFullYear()} Shop247.com. All rights reserved.</p>
          <p>150 East-West Road, Rumuodara</p>
          <p>Port Harcourt, Rivers State, Nigeria</p>
          <p>07067998650</p>
        </div>

        {/* Middle section: Quick links */}
        <div className="footer-links">
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/contact">Contact Us</a>
        </div>

        {/* Right section: Social media links */}
        <div className="footer-social">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <i className="fab fa-facebook"></i> Facebook
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <i className="fab fa-instagram"></i> Instagram
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <i className="fab fa-twitter"></i> Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
