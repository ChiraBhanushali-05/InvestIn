// pages/Investor.js
"use client"
import React from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import app from '../api/firebase.js';
import withAuth from '../auth/page';

const Investor = () => {
    const router = useRouter();

    const handleSignOut = async () => {
        const auth = getAuth(app);
        await signOut(auth);
        router.push('/SignUp');
    };

    return (
        <div>
            <h1>Welcome to the Investor Page</h1>
            <button onClick={handleSignOut}>Sign Out</button>
        </div>
    );
};

export default withAuth(Investor);
