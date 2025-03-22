import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/global.css';

function Layout({ children }) {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main style={{ flex: 1, padding: '1rem' }}>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;