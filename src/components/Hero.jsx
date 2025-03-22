import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/hero.css';

function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Let’s hire your next great candidate. Fast.</h1>
        <Link to="/post-job-form">
          <button>Post a free job*</button>
        </Link>
      </div>
      <div className="hero-image">
        {/* Placeholder for the illustration */}
        <div style={{ backgroundColor: '#e5e7eb', height: '200px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <p style={{ color: '#6f6f6f' }}>[Illustration Placeholder]</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;