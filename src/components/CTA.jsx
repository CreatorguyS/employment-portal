import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/cta.css';

function CTA() {
  return (
    <div className="cta">
      <h2>Ready to Take the Next Step?</h2>
      <div className="cta-buttons">
        <Link to="/jobs"><button>Explore Jobs</button></Link>
        <Link to="/post-job"><button>Post a Job</button></Link>
      </div>
    </div>
  );
}

export default CTA;