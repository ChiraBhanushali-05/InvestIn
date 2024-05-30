import React from 'react';
import styles from './Money.module.css';

const Money = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>
        "Welcome to Invest-in, your gateway to tax-free investments and boundless opportunities for business success! With us, you're not just investing; you're pioneering a path to financial freedom."
      </h2>
      <div style={{ display: "flex" }}>
        <div>
          <img className={styles.slideInImage} src="/man.png" alt="Man" />
        </div>
        <div style={{ display: "table-column" }}>
          <div className={styles.card}>
            <h3>Tax-Free Investments</h3>
            <p>Say goodbye to tax headaches! Invest-in offers a range of investment areas where you can grow your wealth without worrying about taxes eating into your profits. It's your money, and we believe you should keep more of it.</p>
          </div>
          <div className={styles.card}>
            <h3>Business Collaboration</h3>
            <p>Looking to take your business to new heights? Our platform connects you with like-minded entrepreneurs for fruitful collaborations. Whether you're seeking partners, suppliers, or clients, Invest-in provides the perfect environment to foster lucrative business relationships.</p>
          </div>
          <div className={styles.card}>
            <h3>Success is Within Reach</h3>
            <p>At Invest-in, success isn't just a possibility; it's an expectation. With our expert guidance and unparalleled support, you'll have everything you need to turn your entrepreneurial dreams into reality. Join us today and let's build a future of prosperity together!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Money;
