import React from 'react';
import styles from './Program.module.css'; // Import the CSS module

const Programs = () => {
  return (
    <div>
      <section className={styles.programsContainer}>
        <div className={styles.programContent}>
          <h2>NEED HELP IN RAISING CAPITAL?</h2>
          <div className={styles.programCard}>
            <h3>WHAT YOU CAN DO?</h3>
            <p>This is the one and only platform that provides you with venture capitalists/big sharks that can help you collaborate and invest in your business or startup idea in return for your offering. Just post your business on our platform. It is quite simple, and you can post it by following the steps given below.</p>
          </div>
          <div className={styles.programCard}>
            <h3>FOLLOW THIS TO POST BUSINESS</h3>
            <p>Sign up and login.</p>
            <p>Go to post business.</p>
            <p>Enter details about your project.</p>
            <p>Here you are done!</p>
          </div>
        </div>
        <img className={styles.programImage} src="/businessman.png" alt="Business" />
      </section>
    </div>
  );
};

export default Programs;
