import React from 'react';
import styles from './ContactPage.module.css';

const ContactPage = () => {
  return (
    <div className={styles.contactContainer}>
      <header className={styles.header}>
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Whether you have a question about features, trials, or anything else, our team is ready to answer all your questions.</p>
      </header>

      <section className={styles.section}>
        <h2>General Inquiries</h2>
        <p>For general questions or support, please reach out to us at:</p>
        <a href="mailto:support@locallancer.com" className={styles.emailLink}>support@locallancer.com</a>
      </section>

      <section className={styles.section}>
        <h2>Meet the Developers</h2>
        <p>Have a technical question or want to connect with the minds behind Local Lancer? Feel free to contact the developers directly.</p>
        <div className={styles.devGrid}>
          {/* Developer 1: Vraj */}
          <div className={styles.devCard}>
            <h3>Vraj</h3>
            <p>Co-founder & Lead Developer</p>
            <a href="tel:+910000000000" className={styles.phoneLink}>
              📞 (+91) 00000-00000
            </a>
          </div>
          {/* Developer 2: Krushi */}
          <div className={styles.devCard}>
            <h3>Krushi</h3>
            <p>Co-founder & Full-Stack Developer</p>
            <a href="tel:+910000000000" className={styles.phoneLink}>
              📞 (+91) 00000-00000
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
