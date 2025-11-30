import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerColumn}>
          <h4>Navigate</h4>
          <Link to="/">Home</Link>
          <Link to="/gigs">Find a Job</Link>
          <Link to="/post-a-job">Post a Job</Link>
        </div>
        <div className={styles.footerColumn}>
          <h4>Company</h4>
          <Link to="/about">About Us</Link>
          <Link to="/how-it-works">How It Works</Link> {/* <-- HERE IS THE LINK */}
          <Link to="/contact">Contact</Link>
        </div>
        <div className={styles.footerColumn}>
          <h4>Resources</h4>
          <Link to="/help">Help & FAQ</Link>
          <Link to="/blog">Blog</Link>
        </div>
        <div className={styles.footerColumn}>
          <h4>Policies</h4>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Local Lancer. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;