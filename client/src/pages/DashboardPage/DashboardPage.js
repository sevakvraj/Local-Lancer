import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import api from '../../api/axiosConfig';
import styles from './DashboardPage.module.css';
import { Link } from 'react-router-dom';

// Component to display a client's posted gigs
const ClientDashboard = ({ userId }) => {
  const [gigs, setGigs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClientGigs = async () => {
      try {
        // This route needs to be created on the backend
        const response = await api.get('/gigs/mygigs'); 
        setGigs(response.data);
      } catch (error) {
        console.error("Failed to fetch client gigs", error);
      } finally {
        setLoading(false);
      }
    };
    fetchClientGigs();
  }, [userId]);

  if (loading) return <p>Loading your gigs...</p>;

  return (
    <section>
      <h3>My Posted Gigs</h3>
      {gigs.length === 0 ? (
        <p>You haven't posted any gigs yet.</p>
      ) : (
        <table className={styles.dashboardTable}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Status</th>
              <th>Budget</th>
              <th>Assigned To</th>
            </tr>
          </thead>
          <tbody>
            {gigs.map(gig => (
              <tr key={gig._id}>
                <td><Link to={`/gigs/${gig._id}`}>{gig.title}</Link></td>
                <td><span className={`${styles.status} ${styles[gig.status]}`}>{gig.status}</span></td>
                <td>₹{gig.budget}</td>
                <td>{gig.selectedFreelancer?.username || 'N/A'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
};

// Component to display a freelancer's assigned gigs
const FreelancerDashboard = ({ userId }) => {
  // This would be built similarly to ClientDashboard, fetching from '/api/gigs/assigned'
  return (
    <section>
      <h3>My Bids & Assigned Gigs</h3>
      <p>You haven't placed any bids yet.</p>
    </section>
  );
};


const DashboardPage = () => {
  const { user } = useContext(AuthContext);

  if (!user) return <p>Loading user data...</p>;

  return (
  <div className={styles.dashboardContainer}>
    {/* Greet the user by name */}
    <h2 className={styles.header}>Welcome, {user.username}!</h2>
      
    {/* Conditionally render the correct dashboard based on user role */}
    {user.role === 'client' ? <ClientDashboard userId={user.id} /> : <FreelancerDashboard userId={user.id} />}
  </div>
  );
};

export default DashboardPage;