import React from 'react';
import Layout from '../components/Layout';
import JobCard from '../components/JobCard';
import '../styles/page.css';

const jobs = [
  { id: 1, title: 'Frontend Developer', company: 'WebSolutions', location: 'Remote' },
  { id: 2, title: 'Data Analyst', company: 'DataCorp', location: 'Chicago' },
  { id: 3, title: 'Marketing Specialist', company: 'MarketInc', location: 'Los Angeles' },
];

function JobListings() {
  return (
    <Layout>
      <section className="page-section container">
        <h1>Job Listings</h1>
        <div className="job-grid">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </section>
    </Layout>
  );
}

export default JobListings;