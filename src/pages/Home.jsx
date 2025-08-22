import React from 'react';
import Navbar from '../components/Navbar';
import HeroBanner from '../components/Hero'
import DeePlusSection from "../components/DeePlusSection"
import HeroSection from "../components/HeroSection2"
import Services from "../components/Services"
import Testimonials from "../components/Testimonials"
import Team from "../components/Team"
import Blog from "../components/Blog"
import FAQ from "../components/FAQ"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <DeePlusSection />
      <HeroSection />
      <Services />
      <Testimonials />
      <Team />
      <Blog />
      <FAQ />
      <Footer />


    </>
  );
};

export default Home;
