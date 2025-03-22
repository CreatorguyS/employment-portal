import React from 'react';
import Layout from '../components/Layout';
import '../styles/form.css';
import '../styles/page.css';

function Contact() {
  return (
    <Layout>
      <section className="page-section container">
        <h1>Contact Us</h1>
        <form className="form-container">
          <h2>Get in Touch</h2>
          <label>Name</label>
          <input type="text" placeholder="Enter your name" />
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />
          <label>Message</label>
          <textarea rows="5" placeholder="Write your message..."></textarea>
          <button>Send</button>
        </form>
      </section>
    </Layout>
  );
}

export default Contact;