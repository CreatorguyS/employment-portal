import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title">
          <Link to="/">Employment Portal</Link>
        </h1>
        <nav>
          <ul className="header-nav">
            <li><Link to="/post-job-form">Post a job</Link></li>
            <li><Link to="/jobs">Find CVs</Link></li>
            <li><Link to="/about">Resources</Link></li>
          </ul>
        </nav>
        <div className="header-right">
          <Link to="/faq">Help Centre</Link>
          <Link to="/login" className="sign-in">Sign in</Link>
          <Link to="/jobs">Find jobs</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;