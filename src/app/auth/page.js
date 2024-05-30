// components/withAuth.js
"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import app from '../api/firebase';

const withAuth = (WrappedComponent) => {
    return (props) => {
        const [loading, setLoading] = useState(true);
        const [isAuthenticated, setIsAuthenticated] = useState(false);
        const router = useRouter();

        useEffect(() => {
            const auth = getAuth(app);
            const unsubscribe = onAuthStateChanged(auth, (user) => {
                if (user) {
                    setIsAuthenticated(true);
                } else {
                    setIsAuthenticated(false);
                    router.push('/SignUp');
                }
                setLoading(false);
            });

            return () => unsubscribe();
        }, [router]);

        if (loading) return <p>Loading...</p>;

        return isAuthenticated ? <WrappedComponent {...props} /> : null;
    };
};

export default withAuth;
