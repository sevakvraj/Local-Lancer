import React, { useState } from 'react';
import api from '../../api/axiosConfig';
import GigCard from '../../components/GigCard/GigCard';
import Map from '../../components/Map/Map';
import styles from './HomePage.module.css';

const HomePage = () => {
  // This state is now controlled by the HomePage
  const [gigs, setGigs] = useState([]); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  // New state to track if a search has been performed
  const [hasSearched, setHasSearched] = useState(false); 

  // This function will be passed to the Map component
  const handleLocationSelect = async (latlng) => {
    setLoading(true);
    setHasSearched(true); // Mark that a search has started
    setError('');
    try {
      // Fetch gigs from the backend based on the clicked location
      const response = await api.get(`/gigs/near?lat=${latlng.lat}&lng=${latlng.lng}`);
      setGigs(response.data.gigs); // Update the gigs list with the results
    } catch (err) {
      setError('Could not fetch gigs for this location. Please try again.');
      setGigs([]); // Clear previous results on error
    } finally {
      setLoading(false);
    }
  };

  // This function now dynamically renders content based on the state
  const renderContent = () => {
    if (loading) return <p className={styles.message}>Searching for gigs...</p>;
    if (error) return <p className={`${styles.message} ${styles.error}`}>{error}</p>;
    
    // Message for when a search is done but no gigs are found
    if (hasSearched && gigs.length === 0) {
      return <p className={styles.message}>No gigs available in this area. Try clicking somewhere else!</p>;
    }
    
    // Only show the grid if there are gigs to display
    if (gigs.length > 0) {
      return (
        <div className={styles.gigsGrid}>
          {gigs.map((gig) => (
            <GigCard key={gig._id} gig={gig} />
          ))}
        </div>
      );
    }

    // Initial message before any search
    return <p className={styles.message}>Click the map above to browse local gigs.</p>;
  };

  return (
    <div>
      <header className={styles.pageHeader}>
        <h1>Find Your Next Opportunity</h1>
        <p>Browse local gigs and find your perfect match.</p>
      </header>
      
      {/* Pass the handler function and the gigs list down to the Map */}
      <Map onLocationSelect={handleLocationSelect} gigs={gigs} />
      
      {/* The header is now more dynamic */}
      <h2 className={styles.listHeader}>
        {hasSearched ? 'Gigs Found Nearby' : 'All Available Gigs'}
      </h2>
      
      {renderContent()}
    </div>
  );
};

export default HomePage;