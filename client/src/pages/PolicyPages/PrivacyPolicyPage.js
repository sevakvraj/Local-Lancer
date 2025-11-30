import React from 'react';
import styles from './PolicyPage.module.css'; // Reusing the same style
import { Link } from 'react-router-dom';

const PrivacyPolicyPage = () => {
  return (
    <div className={styles.policyContainer}>
      <h1>Privacy Policy</h1>
      <span className={styles.lastUpdated}>Last Updated: September 28, 2025</span>

      <p>
        Welcome to Local Lancer. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us.
      </p>

      <h2>1. Information We Collect</h2>
      <p>We collect personal information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and Services, when you participate in activities on the website or otherwise when you contact us.</p>
      <p>The personal information that we collect depends on the context of your interactions with us and the website, the choices you make and the products and features you use. The personal information we collect may include the following:</p>
      <ul>
        <li><strong>Personal Information Provided by You.</strong> We collect names; phone numbers; email addresses; mailing addresses; job titles; usernames; passwords; contact preferences; and other similar information.</li>
        <li><strong>Payment Data.</strong> We may collect data necessary to process your payment if you make purchases, such as your payment instrument number (such as a credit card number), and the security code associated with your payment instrument.</li>
      </ul>
      
      <h2>2. How We Use Your Information</h2>
      <p>We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.</p>
       <ul>
        <li>To facilitate account creation and logon process.</li>
        <li>To post testimonials with your consent.</li>
        <li>To manage user accounts.</li>
        <li>To send administrative information to you.</li>
        <li>To protect our Services from fraud.</li>
        <li>To enforce our terms, conditions and policies.</li>
      </ul>
      
      <h2>3. Will Your Information Be Shared With Anyone?</h2>
      <p>We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We may share your data with third-party vendors, service providers, contractors or agents who perform services for us or on our behalf and require access to such information to do that work.</p>
      
      <h2>4. How Do We Keep Your Information Safe?</h2>
      <p>We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.</p>

      <h2>5. Changes to This Policy</h2>
      <p>We may update this privacy notice from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.</p>
      
      <h2>6. How Can You Contact Us About This Notice?</h2>
      <p>If you have questions or comments about this notice, you may <Link to="/contact">contact us</Link>.</p>
    </div>
  );
};

export default PrivacyPolicyPage;
