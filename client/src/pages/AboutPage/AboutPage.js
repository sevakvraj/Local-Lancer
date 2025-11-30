import React from 'react';
import styles from './AboutPage.module.css';

// 1. Import the actual photos of the developers from your assets folder
import sevakVrajPhoto from '../../assets/vraj.jpg'; 
import krushiPhoto from '../../assets/kruzz.jpg';


const AboutPage = () => {
  return (
    <div className={styles.aboutContainer}>
      <header className={styles.hero}>
        <h1>About Local Lancer</h1>
        <p className={styles.subtitle}>Connecting communities, one gig at a time.</p>
      </header>

      <nav className={styles.subNav}>
        <a href="#who-we-are">Who We Are</a>
        <a href="#our-values">Our Values</a>
        <a href="#meet-the-team">Meet the Team</a>
      </nav>

      {/* --- WHO WE ARE and OUR VALUES sections remain the same --- */}
      <section id="who-we-are" className={styles.section}>
        <h2>Who We Are</h2>
        <p>
          Local Lancer was founded on a simple belief: the best talent is often right in your own neighborhood. In a world of global, faceless platforms, we saw a need to bring the focus back to the community. We're here to bridge the gap between skilled local freelancers and the businesses that make our cities thrive.
        </p>
        <div className={styles.visionGrid}>
          <div className={styles.visionCard}>
            <h3>Our Mission</h3>
            <p>To empower local economies by connecting skilled freelancers with businesses in their own communities, making it simple to find and hire trusted local talent.</p>
          </div>
          <div className={styles.visionCard}>
            <h3>Our Vision</h3>
            <p>A future where every local business can thrive by easily accessing the talent in their neighborhood, fostering a vibrant, self-sustaining professional ecosystem.</p>
          </div>
          <div className={styles.visionCard}>
            <h3>Our Promise</h3>
            <p>Connect, collaborate, and succeed—locally. We provide a trusted, secure, and simple platform for finding and managing local freelance work.</p>
          </div>
        </div>
      </section>

      <section id="our-values" className={styles.section}>
        <h2>Our Values</h2>
        <div className={styles.valuesGrid}>
          <div className={styles.valueCard}>
            <span>01</span>
            <h3>Community First</h3>
            <p>We believe in the power of local. Every feature we build is designed to strengthen professional relationships within the community.</p>
          </div>
          <div className={styles.valueCard}>
            <span>02</span>
            <h3>Absolute Trust</h3>
            <p>From verified local profiles to our secure payment system, we build trust into every step of the process.</p>
          </div>
          <div className={styles.valueCard}>
            <span>03</span>
            <h3>Radical Transparency</h3>
            <p>No hidden fees, no confusing terms. We believe in clear communication and honest reviews.</p>
          </div>
          <div className={styles.valueCard}>
            <span>04</span>
            <h3>Commitment to Quality</h3>
            <p>We are a platform for skilled professionals, championing high-quality work and expertise.</p>
          </div>
          <div className={styles.valueCard}>
            <span>05</span>
            <h3>Simplicity in Design</h3>
            <p>Our platform is designed to be intuitive and user-friendly, so you can focus on what matters.</p>
          </div>
        </div>
      </section>

      {/* --- UPDATED MEET THE TEAM SECTION --- */}
      <section id="meet-the-team" className={styles.section}>
        <h2>Meet the Team</h2>
        <p>The passionate developers building Local Lancer.</p>
        <div className={styles.teamGrid}>
          
          {/* Developer 1: Sevak Vraj */}
          <div className={styles.teamMember}>
            <img src={sevakVrajPhoto} alt="Sevak Vraj, Frontend Developer" />
            <h3>Sevak Vraj</h3>
            <p>Frontend Developer</p>
          </div>
          
          {/* Developer 2: Krushi */}
          <div className={styles.teamMember}>
            <img src={krushiPhoto} alt="Krushi, Backend Developer" />
            <h3>Krushi</h3>
            <p>Backend Developer</p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default AboutPage;
