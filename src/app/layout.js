"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import GlobalStyle from "./components/GlobalStyle"
 // Ensure this path is correct

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" />
      </head>
      <body>
        {/* <GlobalStyle /> */}
        {/* <Header /> */}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
