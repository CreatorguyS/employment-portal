import React from 'react';
import Layout from '../components/Layout';
import '../styles/page.css';

function FAQ() {
  return (
    <Layout>
      <section className="page-section container">
        <h1>FAQ</h1>
        <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '15px', boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)' }}>
          <h2>How do I apply for a job?</h2>
          <p>Click "View Details" on a job listing and submit your application through the form provided.</p>
        </div>
      </section>
    </Layout>
  );
}

export default FAQ;