import React from 'react';
import Layout from '../components/Layout';
import '../styles/page.css';

function EmployerDashboard() {
  return (
    <Layout>
      <section className="page-section container">
        <h1>Employer Dashboard</h1>
        <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '15px', boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)' }}>
          <h2>Your Posted Jobs</h2>
          <p>No jobs posted yet. <Link to="/post-job-form">Post a job now</Link>.</p>
        </div>
      </section>
    </Layout>
  );
}

export default EmployerDashboard;