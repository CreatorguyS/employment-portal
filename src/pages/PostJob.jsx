import React, { useState } from 'react';
import Layout from '../components/Layout';
import '../styles/form.css';
import '../styles/page.css';

function PostJob() {
  const [jobData, setJobData] = useState({
    title: '',
    company: '',
    location: '',
    description: '',
  });

  const handleChange = (e) => {
    setJobData({ ...jobData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Job Posted:', jobData);
    alert('Job posted successfully!');
  };

  return (
    <Layout>
      <section className="page-section container">
        <h1>Post a New Job</h1>
        <form className="form-container" onSubmit={handleSubmit}>
          <h2>Job Details</h2>
          <label>Job Title</label>
          <input
            type="text"
            name="title"
            value={jobData.title}
            onChange={handleChange}
            placeholder="Enter job title"
            required
          />
          <label>Company</label>
          <input
            type="text"
            name="company"
            value={jobData.company}
            onChange={handleChange}
            placeholder="Enter company name"
            required
          />
          <label>Location</label>
          <input
            type="text"
            name="location"
            value={jobData.location}
            onChange={handleChange}
            placeholder="Enter location"
            required
          />
          <label>Description</label>
          <textarea
            name="description"
            value={jobData.description}
            onChange={handleChange}
            rows="5"
            placeholder="Enter job description"
            required
          ></textarea>
          <button type="submit">Post Job</button>
        </form>
      </section>
    </Layout>
  );
}

export default PostJob;