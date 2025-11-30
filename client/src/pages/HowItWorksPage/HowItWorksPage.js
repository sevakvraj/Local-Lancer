import React, { useState } from 'react';
import styles from './HowItWorksPage.module.css';

const HowItWorksPage = () => {
  const [activeTab, setActiveTab] = useState('clients'); // 'clients' or 'freelancers'

  const ClientContent = () => (
    <div className={styles.contentSection}>
      <div id="post" className={styles.step}>
        <h2>Post a Gig 🧑‍💼</h2>
        <p>It's easy to get started! Simply post your job for free and start receiving quotes from qualified local freelancers.</p>
        <ol>
          <li><strong>Join our Community - it's free!</strong> Sign up to post the job and verify your details in a single step.</li>
          <li><strong>Post Your Job.</strong> Provide the details of your project. The more specific you are, the better the proposals you'll receive.</li>
          <li><strong>Get Quotes from Local Talent.</strong> Within hours, skilled freelancers from your own community will send proposals for your review.</li>
        </ol>
      </div>
      <div id="hire" className={styles.step}>
        <h2>Hire ✍️</h2>
        <p>Review, compare, and select the best local freelancer for your job.</p>
        <ol>
          <li><strong>Evaluate Quotes.</strong> Browse proposals and review freelancer profiles. Check their skills, portfolio, and ratings from other local businesses.</li>
          <li><strong>Finalize the Agreement.</strong> Found the perfect match? Agree on the scope of work, payment terms, and project timeline.</li>
          <li><strong>Hire with a Click.</strong> Hire your chosen freelancer in one click and get your project started right away.</li>
        </ol>
      </div>
      <div id="manage" className={styles.step}>
        <h2>Manage 📈</h2>
        <p>Use our WorkRoom to manage freelancers and keep track of progress.</p>
        <ol>
          <li><strong>Build Your Local Team.</strong> Hire multiple freelancers for a job and assign roles to keep things running smoothly.</li>
          <li><strong>Enhance Productivity.</strong> Manage files, share feedback, and communicate with your freelancers all in one place.</li>
          <li><strong>Keep Track of Progress.</strong> Track time, work completed, and payments tracked by hourly or fixed-price contracts.</li>
        </ol>
      </div>
      <div id="pay" className={styles.step}>
        <h2>Pay 💳</h2>
        <p>Pay a local freelancer for a job well done through our secure payment system.</p>
        <ol>
          <li><strong>Use SafePay.</strong> Only pay for work that you're 100% satisfied with when you use our SafePay protection.</li>
          <li><strong>Pay with Ease.</strong> We support automatic payments to the freelancer when a milestone is completed.</li>
          <li><strong>Choose Your Preferred Method.</strong> We offer four convenient payment options: credit/debit card, PayPal, eCheck (U.S. only), and wire transfer.</li>
        </ol>
      </div>
    </div>
  );

  const FreelancerContent = () => (
    <div className={styles.contentSection}>
      <div id="signup-freelancer" className={styles.step}>
        <h2>Sign Up 📝</h2>
        <p>Create your freelancer profile easily.</p>
        <ol>
            <li><strong>Join our Community - it's free!</strong> Sign up and verify your details in a single step to get started.</li>
            <li><strong>Build Your Profile.</strong> Describe the services you offer, showcase your portfolio, and include other details that will make your profile stand out.</li>
        </ol>
      </div>
      <div id="find-work" className={styles.step}>
        <h2>Find Work 🔎</h2>
        <p>We make it easy to identify and apply for local jobs that match your skills.</p>
        <ol>
            <li><strong>View Local Job Listings.</strong> Browse all freelance jobs in your area or get recommendations based on your skills.</li>
            <li><strong>Submit Quotes.</strong> Choose from our flexible payment terms and share your understanding of the scope of work to send a compelling proposal.</li>
            <li><strong>Get Hired.</strong> Discuss the details with the client in detail and finalize the agreement to start work.</li>
        </ol>
      </div>
      <div id="manage-work" className={styles.step}>
        <h2>Manage the Work 🤝</h2>
        <p>Use WorkRooms to efficiently collaborate, team up with other local freelancers, and communicate with clients.</p>
        <ol>
            <li><strong>Build Your Team.</strong> Add team members to a job and assign roles to each individual.</li>
            <li><strong>Enhance Productivity.</strong> Share files, communicate with your team, and create invoices in a single place.</li>
            <li><strong>Keep Track of Progress.</strong> For hourly payments, use our Time Tracker to track the time spent and create invoices.</li>
        </ol>
      </div>
      <div id="get-paid" className={styles.step}>
        <h2>Get Paid 💵</h2>
        <p>Get paid for the work you do in a timely manner through our secure payment system.</p>
        <ol>
            <li><strong>Use SafePay.</strong> Ensure your work is funded by the client before you start, and use SafePay to ensure you are paid for a job well done.</li>
            <li><strong>Opt for Automatic Payments.</strong> Get paid automatically when you and the client agree that a milestone has been completed.</li>
            <li><strong>Use Your Preferred Payment Method.</strong> Choose from four secure payment withdrawal options: PayPal, Payoneer, wire transfer, or Direct Deposit (U.S. only).</li>
        </ol>
      </div>
    </div>
  );

  return (
    <div className={styles.howItWorksContainer}>
      <header className={styles.header}>
        <h1>How Local Lancer Works</h1>
        <p>Find and hire local talent using our secure, flexible, and community-focused platform.</p>
      </header>
      
      <div className={styles.tabContainer}>
        <button 
          className={activeTab === 'clients' ? styles.activeTab : styles.tab} 
          onClick={() => setActiveTab('clients')}
        >
          For Clients
        </button>
        <button 
          className={activeTab === 'freelancers' ? styles.activeTab : styles.tab} 
          onClick={() => setActiveTab('freelancers')}
        >
          For Freelancers
        </button>
      </div>

      {activeTab === 'clients' ? <ClientContent /> : <FreelancerContent />}
    </div>
  );
};

export default HowItWorksPage;