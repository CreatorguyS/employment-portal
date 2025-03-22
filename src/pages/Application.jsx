import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import '../styles/form.css';
import '../styles/page.css';

function Application() {
  const { id } = useParams();

  return (
    <Layout>
      <section className="page-section container">
        <h1>Apply for Job #{id}</h1>
        <form className="form-container">
          <h2>Application Form</h2>
          <label>Full Name</label>
          <input type="text" placeholder="Enter your name" />
          <label>Cover Letter</label>
          <textarea rows="5" placeholder="Write your cover letter..."></textarea>
          <button>Submit Application</button>
        </form>
      </section>
    </Layout>
  );
}

export default Application;