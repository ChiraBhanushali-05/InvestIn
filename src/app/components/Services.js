// components/Services.js

import React from 'react';
import styles from './Services.module.css';



const Services = () => {
  return (
    <div>
      <section className={styles.servicesContainer}>
        <img className={styles.slideInImage} src="investor.PNG" alt="Investor" />
        <div className={styles.serviceContent}>
          <h2>Invest Smart Earn Big !</h2>
          <div className={styles.serviceCard}>
            <h3>Investment in Innovation. Earn in Equity.</h3>
            <p>Join us to fuel groundbreaking advancements and secure a stake in our success. Invest today for substantial returns and equity in a company poised for significant growth. Share in the profits of our collective achievements. Seize the opportunity to be part of the next big thing.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Collaborate for Greater Success.</h3>
            <p>Partner with us to access cutting-edge resources and innovate together. We seek like-minded businesses to co-develop products, expand market reach, and achieve shared goals. Join forces for mutual success and industry impact. Together, we can push the boundaries of what's possible.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
