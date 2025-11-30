import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './PostJobPage.module.css';
import Button from '../../components/Button/Button';
import { AuthContext } from '../../context/AuthContext';
import api from '../../api/axiosConfig';

const PostJobPage = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: '',
        category: '',
        description: '',
        budget: '',
        city: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const locationData = {
                type: 'Point',
                coordinates: [72.8634, 22.6916] // Placeholder coordinates for now
            };
            const gigData = { ...formData, location: locationData };
            await api.post('/gigs', gigData);
            navigate('/dashboard');
        } catch (error) {
            console.error("Failed to post gig:", error);
            alert('Failed to post gig.');
        }
    };

    // --- THIS IS THE FIX ---
    // Handle the initial loading state while the user object is being populated.
    if (user === null) {
        // This brief message will show while the context loads, preventing the crash.
        return <div className={styles.pageContainer}><p>Loading...</p></div>;
    }

    // Now that we know 'user' is not null, we can safely check its role.
    if (user.role === 'freelancer') {
        return (
            <div className={styles.pageContainer}>
                <div className={styles.accessDeniedWrapper}>
                    <h2>Client Account Required</h2>
                    <p>Only users with a client account are able to post new gigs. Please create or log in with a client account.</p>
                    <Button onClick={() => navigate('/dashboard')}>Go to Dashboard</Button>
                </div>
            </div>
        );
    }
    
    // Note: The check for a logged-out user is now handled by your ProtectedRoute,
    // but this component will only show the form if the user is a client.

    return (
        <div className={styles.pageContainer}>
            <header className={styles.header}>
                <h1>Post a New Gig</h1>
                <p>Attract the best local talent by providing a clear and detailed project description.</p>
            </header>

            <div className={styles.formWrapper}>
                <form onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="title">Gig Title</label>
                        <input id="title" name="title" type="text" className={styles.input} placeholder="e.g., Need a Logo for My New Cafe" value={formData.title} onChange={handleChange} required />
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="category">Category</label>
                        <select id="category" name="category" className={styles.select} value={formData.category} onChange={handleChange} required>
                            <option value="">Select Category</option>
                            <option value="Design">Design</option>
                            <option value="Writing">Writing</option>
                            <option value="Development">Development</option>
                        </select>
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="description">Project Description</label>
                        <textarea id="description" name="description" className={styles.textarea} placeholder="Describe your project in detail..." value={formData.description} onChange={handleChange} required></textarea>
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="budget">Your Budget (in ₹)</label>
                        <input id="budget" name="budget" type="number" className={styles.input} placeholder="e.g., 15000" value={formData.budget} onChange={handleChange} required />
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="city">Project City</label>
                        <input id="city" name="city" type="text" className={styles.input} placeholder="e.g., Nadiad" value={formData.city} onChange={handleChange} required />
                    </div>
                    <Button type="submit">Review & Post Gig</Button>
                </form>
            </div>
        </div>
    );
};

export default PostJobPage;
