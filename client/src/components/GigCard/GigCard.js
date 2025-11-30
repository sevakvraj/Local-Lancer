import React from 'react';
import { Link } from 'react-router-dom';
import styles from './GigCard.module.css';

const GigCard = ({ gig }) => {
  // Create a lowercase, safe class name from the category (e.g., "Development" -> "development")
  const categoryClass = gig.category ? styles[gig.category.toLowerCase()] : '';

  return (
    // Dynamically apply the category class to the main div
    <div className={`${styles.card} ${categoryClass}`}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.title}>{gig.title}</h3>
          <span className={styles.budget}>₹{gig.budget}</span>
        </div>
        <p className={styles.description}>
          {gig.description.substring(0, 100)}...
        </p>
        <div className={styles.footer}>
          <span className={styles.category}>{gig.category}</span>
          <Link to={`/gigs/${gig._id}`}>View Details &rarr;</Link>
        </div>
      </div>
    </div>
  );
};

export default GigCard;