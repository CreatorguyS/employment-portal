import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import '../styles/form.css';
import '../styles/page.css';

function Login() {
  return (
    <Layout>
      <section className="page-section container">
        <form className="form-container">
          <h2>Login</h2>
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />
          <label>Password</label>
          <input type="password" placeholder="Enter your password" />
          <button>Login</button>
          <p style={{ textAlign: 'center', marginTop: '1rem' }}>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </form>
      </section>
    </Layout>
  );
}

export default Login;