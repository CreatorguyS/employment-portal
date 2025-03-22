import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/jobcard.css';

function JobCard({ job }) {
  return (
    <div className="job-card">
      <h3>{job.title}</h3>
      <p>{job.company} - {job.location}</p>
      <Link to={`/job/${job.id}`}>
        <button>View Details</button>
      </Link>
    </div>
  );
}

export default JobCard;