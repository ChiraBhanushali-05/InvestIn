"use client"
import React, { useState, useEffect } from 'react';
import styles from './Header.module.css'; // Import the CSS module
import { useRouter } from 'next/navigation'; 

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [scrolled, setScrolled] = useState(true);
  const router = useRouter(); 

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setScrolled(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ''}`}>
      <div className={styles.logo}>Invest-In</div>
      <div className={styles.navButtons}>
        <button className={styles.navButton}>👨‍💼My Profile</button>
        <button className={styles.navButton} onClick={() => router.push('/components/Investin')}>💲Invest Now</button>
        <button className={styles.navButton}  onClick={() => router.push('/components/Ignite')}>📝Ignite your idea</button>
        <button className={styles.navButton}  onClick={() => router.push('/SignUp')}>🔑Login</button>
      </div>
    </nav>
  );
};

export default Header;
