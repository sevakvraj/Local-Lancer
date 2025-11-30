import React from 'react';
import styles from './PolicyPage.module.css'; // Reusing the same style
import { Link } from 'react-router-dom';

const TermsOfServicePage = () => {
  return (
    <div className={styles.policyContainer}>
      <h1>Terms of Service</h1>
      <span className={styles.lastUpdated}>Last Updated: September 28, 2025</span>

      <h2>1. Agreement to Terms</h2>
      <p>
        By using our services, you agree to be bound by these Terms. If you do not agree to be bound by these Terms, do not use the Services.
      </p>

      <h2>2. Description of Service</h2>
      <p>
        Local Lancer provides an online platform that connects clients ("Clients") and freelancers ("Freelancers"). The platform enables Clients to post jobs and enables Freelancers to submit proposals and be hired to perform those jobs. Local Lancer is a neutral venue and is not a party to any agreements between Clients and Freelancers.
      </p>

      <h2>3. User Accounts</h2>
      <p>
        To use our platform, you must register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete. We reserve the right to suspend or terminate your account if any information provided during the registration process or thereafter proves to be inaccurate, not current, or incomplete.
      </p>
      
      <h2>4. Payments & Fees</h2>
      <p>
        Clients agree to pay the fees for the services they purchase, and you authorize us to charge your selected payment method. Freelancers agree that Local Lancer will deduct a service fee from their earnings. All payments between Clients and Freelancers must be processed through our platform's SafePay system.
      </p>

      <h2>5. User Conduct</h2>
      <p>
        You agree not to use the platform for any unlawful purpose or any purpose prohibited under this clause. You agree not to use the platform in any way that could damage the platform, the services, or the general business of Local Lancer.
      </p>
      
      <h2>6. Termination</h2>
      <p>
        We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
      </p>

      <h2>7. Contact Us</h2>
      <p>
        If you have any questions about these Terms, please <Link to="/contact">contact us</Link>.
      </p>
    </div>
  );
};

export default TermsOfServicePage;
