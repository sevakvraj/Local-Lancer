import React, { useState, useEffect } from 'react';
import styles from './FindJobPage.module.css';
import GigCard from '../../components/GigCard/GigCard';
import Button from '../../components/Button/Button';
import api from '../../api/axiosConfig';

const FindJobPage = () => {
    // State for category and city filters
    const [category, setCategory] = useState('');
    const [city, setCity] = useState('');

    const [gigs, setGigs] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch all gigs when the page first loads
    useEffect(() => {
        const fetchAllGigs = async () => {
            setLoading(true);
            try {
                const response = await api.get('/gigs');
                setGigs(response.data);
            } catch (error) {
                console.error("Failed to fetch gigs:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchAllGigs();
    }, []);
    
    // Handle search when the form is submitted
    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const params = new URLSearchParams();
            if (category) params.append('category', category);
            if (city) params.append('city', city);

            const response = await api.get(`/gigs?${params.toString()}`);
            setGigs(response.data);
        } catch (error) {
            console.error("Failed to search gigs:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Find Gigs in Your Community</h1>
            
            <form className={styles.filterBar} onSubmit={handleSearch}>
                {/* The text input for keyword search has been removed */}
                
                <select 
                    className={styles.input} 
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                >
                    <option value="">All Categories</option>
                    <option value="Design">Design</option>
                    <option value="Writing">Writing</option>
                    <option value="Development">Development</option>
                    <option value="Videographer">Videographer</option>
                    <option value="Teacher">Teacher</option>
                    <option value="Chef">Chef</option>
                    <option value="Waiter">Waiter</option>
                </select>
                
                <select 
                    className={styles.input} 
                    value={city}
                    onChange={e => setCity(e.target.value)}
                >
                    <option value="">All Cities</option>
                    <option value="Ahmedabad">Ahmedabad</option>
                    <option value="Surat">Surat</option>
                    <option value="Vadodara">Vadodara</option>
                    <option value="Rajkot">Rajkot</option>
                    <option value="Bhavnagar">Bhavnagar</option>
                    <option value="Jamnagar">Jamnagar</option>
                    <option value="Gandhinagar">Gandhinagar</option>
                    <option value="Anand">Anand</option>
                    <option value="Nadiad">Nadiad</option>
                    <option value="Bharuch">Bharuch</option>
                </select>

                <Button type="submit">Search</Button>
            </form>

            <div className={styles.resultsContainer}>
                <h2>{category || city ? 'Search Results' : 'All Gigs'}</h2>
                {loading ? <p className={styles.noResults}>Loading...</p> : (
                    gigs.length > 0 ? (
                        <div className={styles.gigsGrid}>
                            {gigs.map(gig => <GigCard key={gig._id} gig={gig} />)}
                        </div>
                    ) : (
                        <p className={styles.noResults}>No gigs found for this search. Try a different location or category!</p>
                    )
                )}
            </div>
        </div>
    );
};

export default FindJobPage;