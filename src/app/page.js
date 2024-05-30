// app/page.js
"use client"
import React from "react";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Programs from "./components/Programs";
import Testimonials from "./components/Testimonial";
import { StyleSheetManager } from 'styled-components';


const Home = () => {
  return (
    <>
    <HeroSection/>
    <Services/>
    <Programs/>
    <Testimonials/>
    </>
  );
};

export default Home;
