import React, { useState } from 'react';
import styles from './HelpPage.module.css';

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.faqItem}>
      <button className={styles.faqQuestion} onClick={() => setIsOpen(!isOpen)}>
        <span>{question}</span>
        <span>{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && <div className={styles.faqAnswer}><p>{answer}</p></div>}
    </div>
  );
};

const HelpPage = () => {
  const clientFaqs = [
    { q: 'How do I post a gig?', a: 'Simply sign up as a client, click the "Post a Job" button, and fill out the form with your project details. The more detail you provide, the better proposals you will receive from local talent.' },
    { q: 'What is SafePay protection?', a: 'SafePay is our secure payment system. You fund the project upfront, but the money is only released to the freelancer once you are 100% satisfied with the work. It provides security for both clients and freelancers.' },
    { q: 'How do I choose the right freelancer?', a: 'Review the proposals you receive and check each freelancer’s profile. Look at their portfolio, skills, and reviews from other local businesses on our platform. We encourage you to chat with them to ensure they are a good fit.' },
  ];

  const freelancerFaqs = [
    { q: 'How do I find local work?', a: 'You can browse all available gigs on the "Find a Job" page or use our map feature to find opportunities right in your neighborhood. We recommend filling out your profile completely to get matched with relevant projects.' },
    { q: 'How and when do I get paid?', a: 'Once a client hires you, they fund the project through our SafePay system. After you complete the work and the client approves it, the funds are released to your Local Lancer account. You can then withdraw your earnings via several methods.' },
    { q: 'Are there any fees for freelancers?', a: 'Local Lancer is free to join and browse jobs. We charge a small, transparent service fee on your earnings per project. This fee helps us maintain the platform and provide support.' },
  ];

  return (
    <div className={styles.helpContainer}>
      <header className={styles.header}>
        <h1>Help & Frequently Asked Questions</h1>
        <p>Find answers to common questions about using Local Lancer.</p>
      </header>

      <section className={styles.section}>
        <h2>For Clients</h2>
        <div className={styles.faqList}>
          {clientFaqs.map((faq, index) => <FaqItem key={index} question={faq.q} answer={faq.a} />)}
        </div>
      </section>

      <section className={styles.section}>
        <h2>For Freelancers</h2>
        <div className={styles.faqList}>
          {freelancerFaqs.map((faq, index) => <FaqItem key={index} question={faq.q} answer={faq.a} />)}
        </div>
      </section>
    </div>
  );
};

export default HelpPage;
