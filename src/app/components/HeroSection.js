import React from 'react';
import styles from './HeroSection.module.css'; // Import the CSS module

const HeroSection = () => {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.heroContent}>
        <h1>HEY! Venture Capitalist</h1>
        <p>-</p>
        <p>Invest-In welcomes you to the Ocean of Gold.....</p> 
        <p>Embark on a new era of investment. Invest in startups and businesses, You can also collaborate to expand your ventures, and earn or acquire funds in exchange for equity.</p> 
        <p>Invest more to earn more with Invest-In.</p>
        <p>😊</p>
        <button>Want to Invest</button>
        <button>Ignite your Business</button>
      </div>
      <div className={styles.heroImage}>
        <img src="/pirate.png" alt="Pirate" style={{ width: "300px" }} />
      </div>
    </section>
  );
};

export default HeroSection;
