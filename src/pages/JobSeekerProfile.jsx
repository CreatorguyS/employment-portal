import React from 'react';
import Layout from '../components/Layout';
import '../styles/page.css';

function JobSeekerProfile() {
  return (
    <Layout>
      <section className="page-section container">
        <h1>Your Profile</h1>
        <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '15px', boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)' }}>
          <h2>Personal Information</h2>
          <p><strong>Name:</strong> John Doe</p>
          <p><strong>Email:</strong> john.doe@example.com</p>
          <button>Edit Profile</button>
        </div>
      </section>
    </Layout>
  );
}

export default JobSeekerProfile;