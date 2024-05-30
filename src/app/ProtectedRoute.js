// components/ProtectedRoute.js
"use client"
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../api/firebase"; // Adjust the path as needed

const ProtectedRoute = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const auth = getAuth(app);

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        // User is not logged in, redirect to sign-in page
        router.push("/SignUp");
      }
    });

    return () => unsubscribe();
  }, [router]);

  return <>{children}</>;
};

export default ProtectedRoute;
