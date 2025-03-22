import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <ul className="footer-nav">
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
        </ul>
        <p className="footer-disclaimer">*Terms, conditions, quality standards and usage limits apply.</p>
      </div>
    </footer>
  );
}

export default Footer;