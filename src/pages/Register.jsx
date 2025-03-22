import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import '../styles/form.css';
import '../styles/page.css';

function Register() {
  return (
    <Layout>
      <section className="page-section container">
        <form className="form-container">
          <h2>Register</h2>
          <label>Name</label>
          <input type="text" placeholder="Enter your name" />
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />
          <label>Password</label>
          <input type="password" placeholder="Enter your password" />
          <button>Register</button>
          <p style={{ textAlign: 'center', marginTop: '1rem' }}>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </section>
    </Layout>
  );
}

export default Register;