import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import JobListings from './pages/JobListing';
import JobDetails from './pages/Jobdetails';
import EmployerDashboard from './pages/EmployerDashboard';
import JobSeekerProfile from './pages/JobSeekerProfile';
import Application from './pages/Application';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import PostJob from './pages/PostJob';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<JobListings />} />
        <Route path="/job/:id" element={<JobDetails />} />
        <Route path="/post-job" element={<EmployerDashboard />} />
        <Route path="/profile" element={<JobSeekerProfile />} />
        <Route path="/apply/:id" element={<Application />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/post-job-form" element={<PostJob />} />
      </Routes>
    </Router>
  );
}

export default App;