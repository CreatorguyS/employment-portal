import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import JobCard from '../components/JobCard';
import CTA from '../components/CTA';
import '../styles/page.css';

const featuredJobs = [
  { id: 1, title: 'Software Engineer', company: 'TechCo', location: 'Remote' },
  { id: 2, title: 'Product Manager', company: 'InnovateInc', location: 'New York' },
  { id: 3, title: 'UX Designer', company: 'DesignStudio', location: 'San Francisco' },
];

function Home() {
  return (
    <Layout>
      <Hero />
      <section className="page-section container">
        <h2>Featured Jobs</h2>
        <div className="job-grid">
          {featuredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </section>
      <CTA />
    </Layout>
  );
}

export default Home;