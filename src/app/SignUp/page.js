// components/SignInSignUp.js
"use client"
import React, { useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import styles from './page.module.css';
import app from "../api/firebase";

const SignInSignUp = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const toggleSignIn = () => {
        setIsSignIn(!isSignIn);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const signUpWithEmail = async (e) => {
        e.preventDefault();
        try {
            const auth = getAuth(app);
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            await sendEmailVerification(user);
            alert("Verification email sent. Please check your inbox.");
            router.push('/Investor');
        } catch (error) {
            console.error("Error signing up with email and password:", error);
        }
    };

    const signInWithGoogle = async () => {
        const auth = getAuth(app);
        const provider = new GoogleAuthProvider();

        try {
            const result = await signInWithPopup(auth, provider);
            router.push('/Investor');
        } catch (error) {
            console.error("Error with Google Sign In:", error);
        }
    };

    const signInWithEmail = async (e) => {
        e.preventDefault();
        try {
            const auth = getAuth(app);
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            if (user.emailVerified) {
                router.push('/Investor');
            } else {
                alert("Please verify your email before signing in.");
            }
        } catch (error) {
            console.error("Error signing in with email and password:", error);
        }
    };

    const signUpForm = (
        <div className={`${styles.formContainer} ${styles.signUp}`}>
            <form onSubmit={signUpWithEmail}>
                <h1>Create Account</h1>
                <div className={styles.socialIcons}>
                    <a href="#" className={styles.icon} onClick={signInWithGoogle}><FontAwesomeIcon icon={faGoogle} /></a>
                    <a href="#" className={styles.icon}><FontAwesomeIcon icon={faFacebookF} /></a>
                    <a href="#" className={styles.icon}><FontAwesomeIcon icon={faGithub} /></a>
                    <a href="#" className={styles.icon}><FontAwesomeIcon icon={faLinkedinIn} /></a>
                </div>
                <span>or use your email for registration</span>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
                <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );

    const signInForm = (
        <div className={`${styles.formContainer} ${styles.signIn}`}>
            <form onSubmit={signInWithEmail}>
                <h1>Sign In</h1>
                <div className={styles.socialIcons}>
                    <a href="#" className={styles.icon} onClick={signInWithGoogle}><FontAwesomeIcon icon={faGoogle} /></a>
                    <a href="#" className={styles.icon}><FontAwesomeIcon icon={faFacebookF} /></a>
                    <a href="#" className={styles.icon}><FontAwesomeIcon icon={faGithub} /></a>
                    <a href="#" className={styles.icon}><FontAwesomeIcon icon={faLinkedinIn} /></a>
                </div>
                <span>or use your email for sign in</span>
                <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
                <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
                <a href="#">Forgot Your Password?</a>
                <button type="submit">Sign In</button>
            </form>
        </div>
    );

    const togglePanel = (
        <div className={styles.toggleContainer}>
            <div className={styles.toggle}>
                <div className={`${styles.togglePanel} ${styles.toggleLeft}`}>
                    <h1>Welcome Back!</h1>
                    <p>Enter your personal details to use all site features</p>
                    <button className={isSignIn ? styles.hidden : ''} onClick={toggleSignIn}>Sign In</button>
                </div>
                <div className={`${styles.togglePanel} ${styles.toggleRight}`}>
                    <h1>Hello, Friend!</h1>
                    <p>Register with your personal details to use all site features</p>
                    <button className={!isSignIn ? styles.hidden : ''} onClick={toggleSignIn}>Sign Up</button>
                </div>
            </div>
        </div>
    );

    const formToShow = isSignIn ? signInForm : signUpForm;

    return (
        <div className={styles.outerContainer}>
            <div className={`${styles.container} ${isSignIn ? '' : styles.active}`}>
                {formToShow}
                {togglePanel}
            </div>
        </div>
    );
};

export default SignInSignUp;
