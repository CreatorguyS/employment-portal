import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import '../styles/page.css';

const jobData = {
  1: { title: 'Software Engineer', company: 'TechCo', location: 'Remote', description: 'Develop and maintain web applications.' },
  2: { title: 'Product Manager', company: 'InnovateInc', location: 'New York', description: 'Lead product development teams.' },
  3: { title: 'UX Designer', company: 'DesignStudio', location: 'San Francisco', description: 'Design user-friendly interfaces.' },
};

function JobDetails() {
  const { id } = useParams();
  const job = jobData[id] || { title: 'Job Not Found', company: '', location: '', description: '' };

  return (
    <Layout>
      <section className="page-section container">
        <h1>{job.title}</h1>
        <p>{job.company} - {job.location}</p>
        <p>{job.description}</p>
        <Link to={`/apply/${id}`}>
          <button>Apply Now</button>
        </Link>
      </section>
    </Layout>
  );
}

export default JobDetails;