import React from 'react';
import styles from './Footer.module.css';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ContactSection = styled.section`
  animation: ${fadeIn} 1s ease-in;
`;

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <ContactSection className={styles.contactSection}>
        <h2>Contact Us</h2>
        <p>If you have any questions or need more information, please contact our Investor Relations team:</p>
        <p>Email: <a href="mailto:investor@company.com">investor@company.com</a></p>
      </ContactSection>
      <p>&copy; 2024 Invest In. All rights reserved.</p>
      <p>
        Investing in businesses is subject to economic risk. Read all the documents carefully before investing.
      </p>
    </footer>
  );
};

export default Footer;
