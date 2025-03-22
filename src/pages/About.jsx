import React from 'react';
import Layout from '../components/Layout';
import '../styles/page.css';

function About() {
  return (
    <Layout>
      <section className="page-section container">
        <h1>About Us</h1>
        <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '15px', boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)' }}>
          <p>We are a leading employment portal dedicated to connecting job seekers with employers worldwide. Our mission is to make job searching and hiring seamless and efficient.</p>
        </div>
      </section>
    </Layout>
  );
}

export default About;