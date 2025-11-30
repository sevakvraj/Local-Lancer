import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../api/axiosConfig';
import styles from './GigDetailPage.module.css';
import { AuthContext } from '../../context/AuthContext';
import Button from '../../components/Button/Button';

const GigDetailPage = () => {
  const { id: gigId } = useParams();
  const { user } = useContext(AuthContext);

  const [gig, setGig] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const [bids, setBids] = useState([]);
  const [proposal, setProposal] = useState('');
  const [amount, setAmount] = useState('');
  const [hasApplied, setHasApplied] = useState(false);

  useEffect(() => {
    const fetchGigAndBids = async () => {
      try {
        setLoading(true);
        const gigResponse = await api.get(`/gigs/${gigId}`);
        setGig(gigResponse.data);

        if (user) {
          if (user.id === gigResponse.data.client._id) {
            const bidsResponse = await api.get(`/bids/${gigId}`);
            setBids(bidsResponse.data);
          }
        }
      } catch (err) {
        setError('Failed to fetch gig details.');
      } finally {
        setLoading(false);
      }
    };
    fetchGigAndBids();
  }, [gigId, user, hasApplied]);

  const handleBidSubmit = async (e) => {
    e.preventDefault();
    try {
        await api.post(`/bids/${gigId}`, { proposal, amount });
        setHasApplied(true);
        alert('Your bid was submitted successfully!');
    } catch (error) {
        alert(error.response?.data?.message || 'Failed to submit bid.');
    }
  };

  if (loading) return <p className={styles.detailContainer}>Loading...</p>;
  if (error) return <p className={styles.detailContainer}>{error}</p>;
  if (!gig) return <p className={styles.detailContainer}>Gig not found.</p>;

  const isClientOwner = user && user.id === gig.client._id;
  const isFreelancer = user && user.role === 'freelancer';

  return (
    <div className={`${styles.detailContainer} ${styles[gig.category.toLowerCase()]}`}>
      <div className={styles.contentWrapper}>
        <header className={styles.header}>
          <div>
            <h1 className={styles.title}>{gig.title}</h1>
            <p className={styles.clientInfo}>Posted by {gig.client.username}</p>
          </div>
          <div className={styles.budget}>₹{gig.budget}</div>
        </header>
        
        <section className={styles.detailsSection}>
          <h3>Project Description</h3>
          <p>{gig.description}</p>
        </section>

        <section className={styles.biddingSection}>
          {isFreelancer && (
            <div>
              <h3>Apply for this Gig</h3>
              <form className={styles.applyForm} onSubmit={handleBidSubmit}>
                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="amount">Your Bid Amount (₹)</label>
                    <input id="amount" type="number" className={styles.input} value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="e.g., 34000" required />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="proposal">Your Proposal</label>
                    <textarea id="proposal" className={styles.textarea} rows="5" value={proposal} onChange={(e) => setProposal(e.target.value)} placeholder="Explain why you are the best fit for this project..." required></textarea>
                </div>
                <Button type="submit">Submit Bid</Button>
              </form>
            </div>
          )}

          {isClientOwner && (
            <div>
              <h3>Proposals Received ({bids.length})</h3>
              {bids.length > 0 ? (
                <div className={styles.bidList}>
                  {bids.map(bid => (
                    <div key={bid._id} className={styles.bidCard}>
                        <div className={styles.bidHeader}>
                            <span className={styles.freelancerName}>{bid.freelancer.username}</span>
                            <span className={styles.bidAmount}>₹{bid.amount}</span>
                        </div>
                        <p className={styles.bidProposal}>{bid.proposal}</p>
                        <div className={styles.bidActions}>
                            <Button variant="primary">Accept</Button>
                            <Button variant="secondary">Reject</Button>
                        </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p>You have not received any proposals for this gig yet.</p>
              )}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default GigDetailPage;

